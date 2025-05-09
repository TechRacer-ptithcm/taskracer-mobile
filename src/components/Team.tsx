import { Image, Text, TouchableOpacity, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, BubbleColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from "../assets/color"
import { Space } from "./Space"
import ThreeDotIcon from "../assets/icons/ThreeDotIcon"
import TaskIcon from "../assets/icons/TaskIcon"
import CheckIcon from "../assets/icons/CheckIcon"
import { useCallback, useEffect, useState } from "react"
import { User } from "../models/User"
import { getUserInfo } from "../services/getUserInfo"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import EarthIcon from "../assets/icons/EarthIcon"
import { joinTeam } from "../services/joinTeam"
import { Team } from "../models/Team"

type TeamProps = {
    type: 'JOINED'|'HAVENT_JOINED',
    id: string,
    slug: string,
    name: string,
    ownerId: string,
    visibility: string,
    user: string[],
    setListOtherTeams: React.Dispatch<React.SetStateAction<Team[]>>
}

export const TeamComponent = ({type, id, slug, name, visibility, user, setListOtherTeams} : TeamProps)=>{
    const [admin, setAdmin] = useState<User| undefined>(undefined)
    const token = useSelector(tokenSelector);

    useEffect(()=>{
        getUserInfo({token: token})
            .then(res=>{
                console.log(res.data.data.name)
                // setListOtherTeams(pre=>[...pre.filter(item=>item.id!==id)])
            })
            .catch(error=>{
                console.log('Get user error with message:', error)
            })
    }, [])
    const handleJoinClick = useCallback(()=>{
        joinTeam({slug: slug})
            .then(res=>{
                console.log('Join team successfully!')
                return res.data.message
            })
            .catch(error=>{
                console.log("Join team error with message:", error);
            })
    }, [])
    const seen = false;
    return (
        <View style = {{position: 'relative', borderRadius: 20, backgroundColor: id%2===0?PrimaryColorRed: PrimaryColorBlue, padding: 24, elevation: 5}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6}}>
                <Title title={name} size={20} color={WhiteColor} type={true} verticalPadding={0} horizontalPadding={0}/>
               
            </View>
            <View style = {{paddingLeft: 12, paddingRight: 12, borderRadius: 20, backgroundColor: WhiteColor, alignSelf: 'baseline', marginBottom: 24}}>
                <Text style = {{color: PrimaryColorBlue}}>
                    {`#${slug.split('-')[0]}`}
                </Text>
            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                    <TaskIcon width = {20} height={20} color = {WhiteColor}/>
                    <Space space={6}/>
                    <Title title={'Over 20 posts'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <EarthIcon width = {20} height={20} color = {WhiteColor}/>
                    <Space space={6}/>
                    <Title title={'PUBLIC'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>
            </View>
            <View style  = {{flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
                <View style = {{position: 'relative', width: 30, height: 30, borderRadius: 30, overflow: 'hidden'}}>
                    <Image source={require('../assets/images/users.png')} style = {{width: 30, height: 30}}/>
                </View>
                <View style = {{borderWidth: 1, borderColor: GrayColor, position: 'relative', width: 30, height: 30, borderRadius: 30, overflow: 'hidden', backgroundColor: BubbleColor, justifyContent: 'center', alignItems: 'center', marginLeft: -8}}>
                    <Title title={`${user.length}+`} size={12} color={GrayColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>
                <Space space={4}/>
                <Title title={`${user.length} ${user.length>=2? 'members': 'member'}`} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>

            </View>
            {
                type === 'JOINED'?

                <View style = {{alignSelf: 'center', borderBottomWidth: 1, borderColor: WhiteColor}}>
                    <Title title={'View details'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>:
                <TouchableOpacity onPress={handleJoinClick} style = {{alignSelf: 'center', borderBottomWidth: 1, borderColor: WhiteColor, padding: 12, paddingLeft: 24, paddingRight: 24, elevation: 5, borderRadius: 20, backgroundColor: WhiteColor}}>
                    <Title title={'Join'} size={12} color={PrimaryColorBlue} type={true} verticalPadding={0} horizontalPadding={0}/>
                </TouchableOpacity>
            }
        </View>
    )
}