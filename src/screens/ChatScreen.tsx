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


export const ChatScreen = () => {
    const [mode, setMode] = useState(true);
    const [searchInput, setSearchInput] = useState('')
    const listChat = [
        {
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },
        {
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },
        {
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },
        {
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        }
    ]
    return (
        <View style={{position: 'relative', flex:1}}>
            <OverlayBubbleAnimation/>
            <View style = {{padding: AppPadding, paddingTop: 80}}>
                <View style = {{flexDirection: 'row', backgroundColor: BackgroundColor, borderRadius: 20, overflow:'hidden'}}>
                    <TouchableOpacity style = {{backgroundColor: mode ? PrimaryColorBlue: BackgroundColor, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(true)}}>
                        <Title title='Yours' color={mode ? WhiteColor: GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: mode ? BackgroundColor: PrimaryColorBlue, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(false)}}>
                        <Title title='Social' color={mode ? GrayColor: WhiteColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                </View>
                <Space space={24}/>
                <View style = {{flexDirection: 'row', padding: 6, paddingLeft: 12, backgroundColor: BackgroundColor, borderRadius: 20, alignItems: 'center'}}>
                    <SearchIcon width={24} height={24} color={GrayColor}/>
                    <TextInput value={searchInput} onChangeText={(value)=>{setSearchInput(value)}} style = {{padding:12, flex: 1, fontFamily: 'DynaPuff-Regular'}} placeholder='Search...'/>
                </View>
            </View>
            {mode ? 
                <ScrollView style = {{paddingLeft: AppPadding, paddingRight: AppPadding}}>
                    {listChat.map((item, index)=>{
                        return (
                            <TouchableOpacity key={Math.random()*100}>
                                <Chat name='Lau ga Binh Thuan' avata='https://cdn.chotot.com/PNht_tvBkqRF21zDcCmPZuvPyjd-yujJrR-jd_tcV5k/preset:view/plain/85a60f9cddd6b1d76de8771c44105910-2921027249543913874.jpg' sampleMessage="Last night you was so great" lastTimeInChat={new Date()}/>
                                <Space space={12}/>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                : 
                <ScrollView style = {{paddingLeft: AppPadding, paddingRight: AppPadding}}>
                    {listChat.map((item, index)=>{
                        return (
                            <TouchableOpacity key={Math.random()*100}>
                                <Post avata='ahii' picture='ahi' name='Lau ga Binh Thuan community' content='Love forever' time={new Date()}/>
                                <Space space={12}/>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            }
        </View>
    );

};
