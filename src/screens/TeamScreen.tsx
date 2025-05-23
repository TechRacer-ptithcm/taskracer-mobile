import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { GrayColor, WhiteColor } from "../assets/color"
import BackIcon from "../assets/icons/BackIcon"
import { AppPadding } from "../constants/spaces"
import { Space } from "../components/Space"
import BellIcon from "../assets/icons/BellIcon"
import Chat2Icon from "../assets/icons/Chat2Icon"
import ThreeDotIcon from "../assets/icons/ThreeDotIcon"
import { useCallback, useEffect, useState } from "react"
import { HeaderTeamSection } from "../sections/HeaderTeamSection"
import { CreatePostSection } from "../sections/CreatePostSection"
import { Post } from "../components/Post"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Team } from "../models/Team"
import { getUserInfo } from "../services/getUserInfo"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParamList } from "../navigation/AppNavigation"
import { deleteTeam } from "../services/deleteTeam"
import { leaveTeam } from "../services/leaveTeam"
import { GetAllPostOfTeamContent, getAllPostsOfTeam } from "../services/getAllPostOfTeam"


export const TeamScreen = ({route}: { route: RouteProp<AppStackParamList>; navigation: any; })=>{
    // const [listPost, setListPost] = useState<>([]);
    const team = route.params?.team.item
    const isReload = route.params?.isReload;
    const setIsReload = route.params?.setIsReload;
    // const {team} = route.params
    
    const navigation = useNavigation();
    const accessToken = useSelector(tokenSelector);
    const [type, setType] = useState<'OWN'|'YOURS'|'OTHER'|undefined>('OWN')
    const [showMore, setShowMore] = useState(false);
    const [listPost, setListPost] = useState<GetAllPostOfTeamContent[]>([])
    useEffect(()=>{
        getUserInfo({token: accessToken})
            .then(res=>{
                if (res.data.data.id===team?.ownerId){
                    setType('OWN');
                } else if (team?.users.includes(res.data.data.id)){
                    setType('YOURS')
                } else{
                    setType('OTHER')
                }
            })
    }, [])
    useEffect(()=>{
        getAllPostsOfTeam({teamId: team.id})
            .then(res=>{
                setListPost(res.data.content)
            })
            .catch(error=>{

            })
    }, [])
    const handleDeleteClick = useCallback(()=>{
        console.log('clcick')
        deleteTeam({slug: team?.slug})
            .then(res=>{
                console.log("Delete Team successfully");
                setIsReload(!isReload)
                navigation.goBack();
            })
            .catch(error=>{
                console.log("Delete team error with message:", error);
            })
    }, [])
    const handleLeaveClick = useCallback(()=>{
        leaveTeam({slug: team?.slug})
            .then(res=>{
                console.log("Leave Team successfully");
                setIsReload(!isReload)
                navigation.goBack()
            })
            .catch(error=>{
                console.log("Leave Team error with message:", error)
            })
    }, [])
    return (
        <View style = {{flex: 1, position: 'relative'}}>
            <OverlayBubbleAnimation/>
            <View style = {{position: 'absolute', backgroundColor: WhiteColor, padding: AppPadding/2, paddingTop: AppPadding*2.5, elevation: 5, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 2}}>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack()
                }}>
                    <BackIcon width={36} height={36} color={GrayColor}/>
                </TouchableOpacity>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <BellIcon width={28} height={28} color={GrayColor}/>
                    </TouchableOpacity>
                    <Space space={12}/>
                    <TouchableOpacity>
                        <Chat2Icon width={24} height={24} color={GrayColor}/>
                    </TouchableOpacity>
                    <Space space={12}/>
                    {
                        type !=='OTHER' &&

                        <TouchableOpacity onPress={()=>{
                            setShowMore(!showMore);
                        }} style = {{position: 'relative'}}>
                            <ThreeDotIcon width={28} height={28} color={GrayColor}/>
                            {
                                showMore &&

                                <View style = {{position: 'absolute', minWidth: 200,padding: 12,  backgroundColor: WhiteColor, elevation: 5, top: 30, right: 0, borderRadius: 20}}>
                                    {
                                        type === 'OWN' &&
                                        <>
                                            <TouchableOpacity style = {{padding: 6, paddingLeft: 0, paddingRight: 0}} onPress={()=>{

                                            }}>
                                                <Text>
                                                    Change group infomations
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {{padding: 6, paddingLeft: 0, paddingRight: 0}} onPress={()=>{

                                            }}>
                                                <Text>
                                                    Add members
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {{padding: 6, paddingLeft: 0, paddingRight: 0}} onPress={handleDeleteClick}>
                                                <Text>
                                                    Delete Group
                                                </Text>
                                            </TouchableOpacity>
                                        </>
                                        
                                        
                                    }
                                    {
                                        type == 'YOURS' &&

                                        <TouchableOpacity style = {{padding: 6, paddingLeft: 0, paddingRight: 0}} onPress={handleLeaveClick}>
                                            <Text>
                                                Leave Group
                                            </Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            }
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <FlatList
                style = {{
                    zIndex: 1,
                    // paddingTop: 130,
                    marginTop: "20%"
                }}
                data={listPost}
                renderItem={(item)=>{
                    console.log(item.item.fileAttachmentUrl[0].name)
                    return (
                        <View style ={{margin: AppPadding/2, elevation: 5, borderRadius: 20, overflow: 'hidden'}}>
                            <Post content={item.item.content} fileAttachment="" likeCount={4} createAt="12" userId={item.item.userId} fileName={item.item.fileAttachmentUrl[0].name}/>
                        </View>
                    )
                }}
                keyExtractor={item=>item.id}
                ListHeaderComponent={
                    <View>
                        <HeaderTeamSection nameGroup={team.name} visibility={team.visibility} slug={team.slug.split('-')[0]} numOfMember={team.users.length} type = {type}/>
                        {
                            type !=='OTHER' &&
                            <CreatePostSection/>
                        }
                    </View>
                }
            />
        </View>
    )
}