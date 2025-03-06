import { Image, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor } from "../assets/color"
import { Space } from "./Space"

type PostProps = {
    avata: string,
    picture: string,
    name: string,
    content: string,
    time: Date
}

export const Post = ({avata, picture, name, content, time} : PostProps)=>{
    const timeString = `${(time.getHours().toString()).length<2 ? '0'+time.getHours().toString() : time.getHours().toString()}:${(time.getMinutes().toString()).length<2 ? '0'+time.getMinutes().toString() : time.getMinutes().toString()}`
    return (
        <View style = {{flexDirection: 'column', backgroundColor: BackgroundColor, borderRadius: 20, padding:12}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>

                <Image source={{uri: 'https://cdn.chotot.com/RmRWI36yk-97axWQ0Le92aDF4wP-hgG3Cx3gsX6t-KY/preset:view/plain/903625df9c042491bead551c2b12856c-2921027247892206895.jpg'}} style = {{width: 50, height: 50, borderRadius: 50}}/>
                <Space space={12}/>
                <View>
                    <Title title={name} color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Title title={timeString} color={GrayColor} size={12} type={false} horizontalPadding={0} verticalPadding={0}/>

                </View>
            </View>
            <Title title={content} color={GrayColor} size={12} type={false} horizontalPadding={6} verticalPadding={12}/>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAD3_KAeW4kjNRMwNl-buJSl4WFEeKlLKWQ&s'}} style = {{width: '100%', aspectRatio:1}}/>
        </View>
    )
}