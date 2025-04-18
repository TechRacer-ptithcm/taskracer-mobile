import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { GrayColor, WhiteColor } from "../assets/color"
import BackIcon from "../assets/icons/BackIcon"
import { AppPadding } from "../constants/spaces"
import { Space } from "../components/Space"
import BellIcon from "../assets/icons/BellIcon"
import Chat2Icon from "../assets/icons/Chat2Icon"
import ThreeDotIcon from "../assets/icons/ThreeDotIcon"
import { useState } from "react"
import { HeaderTeamSection } from "../sections/HeaderTeamSection"
import { CreatePostSection } from "../sections/CreatePostSection"
import { Post } from "../components/Post"



export const TeamScreen = ()=>{
    // const [listPost, setListPost] = useState<>([]);
    const nameGroup = "Successfull people community"
    const listPost = [
        {
            id: '1',
            user_id: '1',
            team_id: '1',
            content: 'string',
            file_attachment_url: "string",
            like_count: 2
        },
        {
            id: '2',
            user_id: '2',
            team_id: '2',
            content: 'string',
            file_attachment_url: "string",
            like_count: 2
        },
        {
            id: '3',
            user_id: '3',
            team_id: '3',
            content: 'string',
            file_attachment_url: "string",
            like_count: 2
        },
        {
            id: '4',
            user_id: '4',
            team_id: '4',
            content: 'string',
            file_attachment_url: "string",
            like_count: 2
        },

    ]

    return (
        <View style = {{flex: 1, position: 'relative'}}>
            <OverlayBubbleAnimation/>
            <View style = {{position: 'absolute', backgroundColor: WhiteColor, padding: AppPadding/2, paddingTop: AppPadding*2.5, elevation: 5, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 2}}>
                <TouchableOpacity>
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
                    <TouchableOpacity>
                        <ThreeDotIcon width={28} height={28} color={GrayColor}/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style = {{
                    zIndex: 1,
                    paddingTop: 130
                }}
                data={listPost}
                renderItem={(item)=>{
                    return (
                        <View style ={{margin: AppPadding/2, elevation: 5, borderRadius: 20, overflow: 'hidden'}}>
                            <Post content="Ahihi" fileAttachment="" likeCount={4} createAt="12"/>
                        </View>
                    )
                }}
                keyExtractor={item=>item.id}
                ListHeaderComponent={
                    <View>
                        <HeaderTeamSection/>
                        <CreatePostSection/>
                    </View>
                }
            />

        </View>
    )
}