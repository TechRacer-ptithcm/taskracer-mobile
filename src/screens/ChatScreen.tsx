import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { Title } from '../components/Title';
import { BackgroundColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from '../assets/color';
import { AppPadding } from '../constants/spaces';
import { useEffect, useState } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import { Space } from '../components/Space';
import { TeamComponent } from '../components/Team';
import { Post } from '../components/Post';
import { useNavigation } from '@react-navigation/native';
import { SocialString, TeamInfoString } from '../constants/screen';
import { getAllTeamss } from '../services/getAllTeams';
import { Team } from '../models/Team';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import { tokenSelector, userSelector } from '../redux/selectors/authSelectors';
import { getUserInfo } from '../services/getUserInfo';
import DownIcon from '../assets/icons/DownIcon';
import { CreateNewTeamSection } from '../sections/CreateNewTeamSection';


export const ChatScreen = () => {
    const [mode, setMode] = useState(true);
    const [searchInput, setSearchInput] = useState('')
    const navigation = useNavigation();
    const [listChat, setListChat] = useState<Team[]>([]);
    const accessToken = useSelector(tokenSelector)
    const userId = useSelector(userSelector);
    const [showExpand, setShowExpand] = useState(false);
    const [listYourTeams, setListYourTeams] = useState<Team[]>([]);
    const [listOtherTeams, setListOtherTeams] = useState<Team[]>([]);
    const [filter, setFilter] = useState<'YOURS'|'OTHER'>("YOURS");
    const [showCreateTeam, setShowCreateTeam] = useState(false);
    const [isReload, setIsReload] = useState(false);
    useEffect(()=>{
        getAllTeamss()
            .then(res=>{
                setListChat(res.data.content)
                getUserInfo({token: accessToken})
                    .then(respond=>{
                        const listYourTeam = res.data.content.filter((item, index)=>{
                            return item.users.includes(respond.data.data.id)
                        })
                        setListYourTeams(listYourTeam);
                        const listOtherTeam = res.data.content.filter((item, index)=>{
                            return  !listYourTeam.includes(item);
                        })
                        setListOtherTeams(listOtherTeam);
                    })
                
                return res.data

            })
            .catch(error=>{
                console.log(error)
            })
    }, [isReload, filter])
    return (
        <View style={{position: 'relative', flex:1}}>

            <OverlayBubbleAnimation/>
            <View style = {{padding: AppPadding, paddingBottom: 12, paddingTop: 80}}>
                <View style = {{flexDirection: 'row', backgroundColor: BackgroundColor, borderRadius: 20, overflow:'hidden'}}>
                    <TouchableOpacity style = {{backgroundColor: mode ? PrimaryColorBlue: BackgroundColor, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(true)}}>
                        <Title title='Teams' color={mode ? WhiteColor: GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: mode ? BackgroundColor: PrimaryColorBlue, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(false)}}>
                        <Title title='Social' color={mode ? GrayColor: WhiteColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                </View>
                {
                    mode &&
                    <>
                        <TouchableOpacity onPress={()=>{
                                setShowCreateTeam(true)
                            }} style  ={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                            <View style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: GrayColor, justifyContent: 'center', alignItems: 'center'}} >
                                <Title title='+' color={WhiteColor} size={32} type={true} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                            <Title title='Create your own group' color={mode ? GrayColor: WhiteColor} size={12} type={true} horizontalPadding={0} verticalPadding={0}/>
                        </TouchableOpacity>    
                        <Space space={12}/>
                        
                    </>
                }
                <View style = {{flexDirection: 'row', padding: 6, paddingLeft: 12,minHeight: 50, backgroundColor: BackgroundColor, borderRadius: 20, alignItems: 'center'}}>
                    <SearchIcon width={24} height={24} color={GrayColor}/>
                    <TextInput value={searchInput} onChangeText={(value)=>{setSearchInput(value)}} style = {{padding:12, flex: 1, fontFamily: 'DynaPuff-Regular'}} placeholder='Search...'/>
                    
                </View>
                
            </View>
            <FlatList
                style = {{
                    zIndex: 1,
                    paddingLeft: AppPadding,
                    paddingRight: AppPadding
                }}
                data={mode? (filter==="YOURS"?listYourTeams: listOtherTeams): listChat}
                renderItem={(item)=>{
                    return (
                        mode?
                        <TouchableOpacity onPress={()=>{navigation.navigate(SocialString, {team: {...item}, isReload: isReload, setIsReload: setIsReload})}} style = {{zIndex: -1}}>
                            <TeamComponent setListOtherTeams = {setListOtherTeams} type={filter==="YOURS"?'JOINED':"HAVENT_JOINED"} ownerId={item.item.ownerId} id={item.item.id} name={item.item.name} slug={item.item.slug} visibility={item.item.visibility} user={item.item.users}/>
                            <Space space={12}/>
                        </TouchableOpacity>:
                        <TouchableOpacity>
                            <Post content='content' fileAttachment='file' likeCount={6} createAt='aslkdjf'/>
                            <Space space={12}/>
                        </TouchableOpacity>
                    )
                }}
                ListHeaderComponent={
                    <View style = {{flexDirection: 'column', alignItems: 'flex-start', position: 'relative'}}>
                        
                        {
                            mode &&
                            <TouchableOpacity onPress={()=>{
                                setShowExpand(!showExpand)
                            }} style = {{flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 12}}>
                                {
                                    filter==='YOURS'&&
                                    <Title title="Your Teams" color={mode ? GrayColor: WhiteColor} size={16} type={true} horizontalPadding={0} verticalPadding={0}/>
                                    
                                }
                                {
                                    filter==='OTHER'&&
                                    <Title title="Other Teams" color={mode ? GrayColor: WhiteColor} size={16} type={true} horizontalPadding={0} verticalPadding={0}/>
                                    
                                }
                                <DownIcon width={20} height={20} color={GrayColor}/>
                                
                            </TouchableOpacity>
                            
                        }
                        {
                            showExpand &&
                            <View style = {{position: 'absolute', backgroundColor: WhiteColor, borderRadius: 20, elevation: 5, padding: 12, zIndex: 100, top: '100%'}}>
                                
                                <TouchableOpacity style = {{ padding: 6, flexDirection: 'row', alignItems: 'center'}} onPress={()=>{
                                    setFilter('YOURS')
                                    setShowExpand(false)
                                }}>
                                {
                                        filter === "YOURS" ?
                                        <View style = {{width: 10, height: 10, borderRadius: 10, marginRight: 12, backgroundColor: PrimaryColorRed}}/>:
                                        <View style = {{width: 10, height: 10, borderRadius: 10, marginRight: 12, backgroundColor: WhiteColor}}/>

                                    }
                                    <Title title="Your Teams" color={mode ? GrayColor: WhiteColor} size={12} type={false} horizontalPadding={0} verticalPadding={0}/>
                                    
                                </TouchableOpacity>
                                <TouchableOpacity style = {{ padding: 6, flexDirection: 'row', alignItems: 'center'}} onPress={()=>{
                                    setFilter('OTHER')
                                    setShowExpand(false)
                                }}>
                                {
                                        filter === "OTHER" ?
                                        <View style = {{width: 10, height: 10, borderRadius: 10, marginRight: 12, backgroundColor: PrimaryColorRed}}/>:
                                        <View style = {{width: 10, height: 10, borderRadius: 10, marginRight: 12, backgroundColor: WhiteColor}}/>

                                    }
                                    <Title title="Other Teams" color={mode ? GrayColor: WhiteColor} size={12} type={false} horizontalPadding={0} verticalPadding={0}/>
                                </TouchableOpacity>

                            </View>
                        }
                </View>
                }
            />
            {
                showCreateTeam &&
                <CreateNewTeamSection isReload={isReload} setIsReload={setIsReload} setShowCreateTeam={setShowCreateTeam}/>
            }
        </View>
    );

};
