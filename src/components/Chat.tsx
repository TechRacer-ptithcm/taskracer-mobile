import { Image, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor } from "../assets/color"
import { Space } from "./Space"

type ChatProps = {
    avata: string,
    name: string,
    sampleMessage: string, 
    lastTimeInChat: Date
}

export const Chat = ({avata, name, sampleMessage, lastTimeInChat} : ChatProps)=>{
    const timeString = `${(lastTimeInChat.getHours().toString()).length<2 ? '0'+lastTimeInChat.getHours().toString() : lastTimeInChat.getHours().toString()}:${(lastTimeInChat.getMinutes().toString()).length<2 ? '0'+lastTimeInChat.getMinutes().toString() : lastTimeInChat.getMinutes().toString()}`
    return (
        <View style = {{flexDirection: 'row', backgroundColor: BackgroundColor, borderRadius: 20, padding:12, justifyContent: 'space-between'}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>

                <Image source={{uri: 'https://cdn.chotot.com/RmRWI36yk-97axWQ0Le92aDF4wP-hgG3Cx3gsX6t-KY/preset:view/plain/903625df9c042491bead551c2b12856c-2921027247892206895.jpg'}} style = {{width: 50, height: 50, borderRadius: 50}}/>
                <Space space={12}/>
                <View>
                    <Title title={name} color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Title title={sampleMessage} color={GrayColor} size={12} type={false} horizontalPadding={0} verticalPadding={0}/>
                </View>
            </View>
            <Title title={timeString} color={GrayColor} size={12} type={true} horizontalPadding={0} verticalPadding={0}/>
        </View>
    )
}