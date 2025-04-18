import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { AppPadding } from "../constants/spaces"
import { GrayColor, WhiteColor } from "../assets/color"
import { AvataBaseWord } from "../components/AvataBaseWord"
import { useState } from "react"
import { Space } from "../components/Space"
import AttachIcon from "../components/AttachIcon"



export const CreatePostSection = ()=>{
    const avata = 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'
    const [inputPost, setInputPost] = useState('');
    const [fileAttachment, setFileAttachment] = useState('');
    return (
        <View style = {{margin: AppPadding/2, marginTop: 0, overflow: 'hidden', flexDirection: 'row', alignItems: 'center', backgroundColor: WhiteColor, borderRadius: 12, padding: AppPadding/2, elevation: 5}}>
            <AvataBaseWord full_name="Phung Xuan Giap" customSize={46}/>
            <Space space={12}/>
            <TextInput value={inputPost} onChangeText={(value)=>{
                setInputPost(value

                )
                
            }}
                style ={{flex: 1, borderWidth: 1, borderColor: GrayColor, borderRadius: 20, padding: 12}}
                placeholder="Your thinking..."
            />
            <Space space={12}/>
            <TouchableOpacity onPress={()=>{
                console.log("click")
            }}
                style = {{padding: 4}}
            >

                <AttachIcon width={24} height={24} color={GrayColor}/>
            </TouchableOpacity>
        </View> 
    )
}