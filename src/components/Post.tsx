import { Image, Text, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor, WhiteColor } from "../assets/color"
import { Space } from "./Space"
import { useEffect, useState } from "react"
import { getUserById, GetUserByIdData } from "../services/getUserById"
import { AvataBaseWord } from "./AvataBaseWord"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import WebView from "react-native-webview"
import FastImage from "react-native-fast-image"

type PostProps = {
    content: string,
    fileAttachment: string,
    likeCount: number,
    createAt: string,
    userId: string,
    fileName: string,
}

export const Post = ({content, fileAttachment, likeCount, createAt, userId, fileName} : PostProps)=>{
    const [user, setUser] = useState<GetUserByIdData|undefined>(undefined)
    const accessToken = useSelector(tokenSelector);
    useEffect(()=>{
        getUserById({userId: userId})
            .then(res=>{
                setUser(res.data)
    })
            .catch(error=>{
                console.log("Get user by id error with message:", error)
            })
    }, [])
    console.log(fileName)

  
    // const timeString = `${(time.getHours().toString()).length<2 ? '0'+time.getHours().toString() : time.getHours().toString()}:${(time.getMinutes().toString()).length<2 ? '0'+time.getMinutes().toString() : time.getMinutes().toString()}`
    return (
        <View style = {{flexDirection: 'column', backgroundColor: BackgroundColor, padding:12}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <AvataBaseWord full_name={user?.name?user.name: "Anonimous User"} customSize={50}/>
                <Space space={12}/>
                <View>
                    <Title title={user?.name?user.name: "Anonimous User"} color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Title title={"12h30 May 5"} color={GrayColor} size={12} type={false} horizontalPadding={0} verticalPadding={0}/>
                </View>
            </View>
            <Title title={content} color={GrayColor} size={12} type={false} horizontalPadding={6} verticalPadding={12}/>
            <View style = {{flexDirection: 'row', alignItems: 'center', backgroundColor: '#EAEAEA', padding: 12, borderRadius: 24}}>
                <Image source={require('../assets/images/FileAttachementImage.png')} style = {{width: 20, height: 20}}/>
                <Space space={4}/>
                <Text style = {{color: GrayColor}}>
                    {fileName}
                </Text>
            </View>
        </View>
    )
}