import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { Title } from '../components/Title';
import { BackgroundColor, GrayColor, PrimaryColorBlue, WhiteColor } from '../assets/color';
import { AppPadding } from '../constants/spaces';
import { useState } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import { Space } from '../components/Space';
import { Chat, Team } from '../components/Team';
import { Post } from '../components/Post';
import { useNavigation } from '@react-navigation/native';
import { SocialString, TeamInfoString } from '../constants/screen';


export const ChatScreen = () => {
    const [mode, setMode] = useState(true);
    const [searchInput, setSearchInput] = useState('')
    const navigation = useNavigation();
    const listChat = [
        {
            id: 1,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },
        {
            id: 2,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },
        {
            id: 3,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },
        {
            id: 4,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 5,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 6,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 7,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 8,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 9,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 10,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 11,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        },{
            id: 12,
            avata: '',
            name: 'John Alexander',
            message: "Common bae!",
            time: '09:34 PM'
        }
    ]
    return (
        <View style={{position: 'relative', flex:1}}>
            <OverlayBubbleAnimation/>
            <View style = {{padding: AppPadding, paddingBottom: 12, paddingTop: 80}}>
                <View style = {{flexDirection: 'row', backgroundColor: BackgroundColor, borderRadius: 20, overflow:'hidden'}}>
                    <TouchableOpacity style = {{backgroundColor: mode ? PrimaryColorBlue: BackgroundColor, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(true)}}>
                        <Title title='Yours' color={mode ? WhiteColor: GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: mode ? BackgroundColor: PrimaryColorBlue, flex:1, borderRadius: 20, alignItems: 'center', paddingTop:6, paddingBottom: 6}} onPress={()=>{setMode(false)}}>
                        <Title title='Social' color={mode ? GrayColor: WhiteColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                </View>
                
            </View>
            <FlatList
                style = {{
                    zIndex: 1,
                    paddingLeft: AppPadding,
                    paddingRight: AppPadding
                }}
                data={mode? listChat : listChat}
                renderItem={(item)=>{
                    return (
                        mode?
                        <TouchableOpacity onPress={()=>{navigation.navigate(SocialString)}}>
                            <Team name='Lau ga Binh Thuan' avata='https://cdn.chotot.com/PNht_tvBkqRF21zDcCmPZuvPyjd-yujJrR-jd_tcV5k/preset:view/plain/85a60f9cddd6b1d76de8771c44105910-2921027249543913874.jpg' lastTimeInTeam={new Date()}/>
                            <Space space={12}/>
                        </TouchableOpacity>:
                        <TouchableOpacity>
                            <Post content='content' fileAttachment='file' likeCount={6} createAt='aslkdjf'/>
                            <Space space={12}/>
                        </TouchableOpacity>
                    )
                }}
                ListHeaderComponent={
                    <View style = {{flexDirection: 'column', alignItems: 'flex-start', paddingBlock: 12}}>
                        {
                            mode &&
                            <>
                                <View style  ={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: GrayColor, justifyContent: 'center', alignItems: 'center'}}>
                                        <Title title='+' color={WhiteColor} size={32} type={true} horizontalPadding={0} verticalPadding={0}/>
                                    </TouchableOpacity>
                                    <Space space={12}/>
                                    <Title title='Create your own group' color={mode ? GrayColor: WhiteColor} size={12} type={true} horizontalPadding={0} verticalPadding={0}/>
                                </View>    
                                <Space space={12}/>
                            </>
                        }
                        <View style = {{flexDirection: 'row', flex: 1, padding: 6, paddingLeft: 12,minHeight: 50, backgroundColor: BackgroundColor, borderRadius: 20, alignItems: 'center'}}>
                            <SearchIcon width={24} height={24} color={GrayColor}/>
                            <TextInput value={searchInput} onChangeText={(value)=>{setSearchInput(value)}} style = {{padding:12, flex: 1, fontFamily: 'DynaPuff-Regular'}} placeholder='Search...'/>
                            
                        </View>
                    </View>
                }
            />
        </View>
    );

};
