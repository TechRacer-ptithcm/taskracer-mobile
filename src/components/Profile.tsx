import { Image, Text, TouchableOpacity, View } from "react-native"
import { AppPadding } from "../constants/spaces"
import { Title } from "./Title"
import { BackgroundColor, GrayColor, GreenColor, PrimaryColorBlue, WhiteColor } from "../assets/color"
import SilverIIcon from "../assets/icons/SilverIIcon"
import { Space } from "./Space"
import FireIcon from "../assets/icons/FireIcon"
import { InfoTagEditable } from "./InfoTagEditable"
import UserIcon from "../assets/icons/UserIcon"
import MailIcon from "../assets/icons/MailIcon"
import LockIcon from "../assets/icons/LockIcon"
import { LinearGradient } from "expo-linear-gradient"
import { useAppDispatch } from "../redux/hooks"
import { useNavigation } from "@react-navigation/native"
import { AuthStackString } from "../constants/screen"
import { resetAuth } from "../redux/slices/authSlice"

type ProfileProps = {
    avata: string,
    userName: string,
    rank: string,
    focusTimeMilisec: number
}

export const Profile = ({avata, userName, rank, focusTimeMilisec} : ProfileProps)=>{
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    return (
        <View>
            <View style = {{width: '100%', paddingLeft: AppPadding, paddingRight: AppPadding, marginTop: 36, alignItems: 'center'}}>
                <View style = {{position: 'relative'}}>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWKy9Ecg0gi9jqAhPMBeaSQ72_lx_A3HLOQ&s'}} style = {{width:100, height: 100, borderRadius:100}}/>
                    <View style = {{position: 'absolute', justifyContent: 'center', alignItems: 'center', bottom: -36, right: -30, transform: [{scale: 0.5}]}}>
                        <SilverIIcon width={100} height={100}/>
                    </View>
                </View>
                <Title title={userName} color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={10}/>
            </View>
            <View style = {{padding: AppPadding, flexDirection: 'row'}}>
                <LinearGradient 
                    colors={['#3CCBAE', '#18B7B9']} 
                    style = {{flex: 1, borderRadius: 20, padding: 24, justifyContent: 'center', alignItems: 'center'}}
                    start={{x: 1, y: 1}}
                    end={{x: 0, y: 1}}
                >
                    <Title title={rank} color={WhiteColor} size={24} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={8}/>
                    <SilverIIcon width={100} height={100}/>
                </LinearGradient>
                <Space space={12}/>
                <LinearGradient 
                    colors={['#83BAFF', '#216AC7']} 
                    style = {{flex: 1, borderRadius: 20, padding: 24, justifyContent: 'center', alignItems: 'center'}}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                >
                    <Title title={'Today'} color={WhiteColor} size={24} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Title title={'2h35m'} color={WhiteColor} size={24} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <FireIcon width={60} height={60}/>
                </LinearGradient>
            </View>
            <View style = {{marginLeft: AppPadding, marginRight: AppPadding}}>
                <InfoTagEditable title={userName} icon={
                    <UserIcon width={28} height={28} color={GrayColor}/>
                } onPress={()=>{}}/>
                <Space space={12}/>
                <InfoTagEditable title={'Email'} icon={
                    <MailIcon width={28} height={28} color={GrayColor}/>
                } onPress={()=>{}}/>
                <Space space={12}/>

                <InfoTagEditable title={'Password'} icon={
                    <LockIcon width={28} height={28} color={GrayColor}/>
                } onPress={()=>{}}/>
                <Space space={12}/>
                <TouchableOpacity onPress={()=>{
                    dispatch(resetAuth());
                    navigation.navigate(AuthStackString);
                }} style = {{padding: 20, backgroundColor: BackgroundColor, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                    <Title title="Logout" color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}