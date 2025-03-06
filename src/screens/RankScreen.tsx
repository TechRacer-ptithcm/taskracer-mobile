import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { Title } from '../components/Title';
import { BackgroundColor, GrayColor, PrimaryColorBlue, WhiteColor } from '../assets/color';
import { AppPadding } from '../constants/spaces';
import { useState } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import { Space } from '../components/Space';
import { Chat } from '../components/Chat';
import { Post } from '../components/Post';
import { Profile } from '../components/Profile';
import { SilverI } from '../constants/rank';


export const RankScreen = () => {
    const [mode, setMode] = useState(true);
    return (
        <View style={{position: 'relative', flex:1}}>
            <OverlayBubbleAnimation/>
            <View style = {{padding: AppPadding, paddingTop: 80}}>
                <View style = {{flexDirection: 'row', backgroundColor: BackgroundColor, borderRadius: 20, overflow:'hidden'}}>
                    <TouchableOpacity style = {{backgroundColor: mode ? PrimaryColorBlue: BackgroundColor, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(true)}}>
                        <Title title='Profile' color={mode ? WhiteColor: GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: mode ? BackgroundColor: PrimaryColorBlue, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(false)}}>
                        <Title title='World' color={mode ? GrayColor: WhiteColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                </View>
            </View>
            {mode ? 
            <Profile avata='' userName='Alexanbeo Grandmother' rank={SilverI} focusTimeMilisec={(new Date()).valueOf()}/>
                : 
                <></>
            }
        </View>
    );

};
