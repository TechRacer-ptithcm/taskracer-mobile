import { Image, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor } from "../assets/color"
import { Space } from "./Space"

type TeamProps = {
    avata: string,
    name: string,
    lastTimeInTeam: Date
}

export const Team = ({avata, name, lastTimeInTeam} : TeamProps)=>{
    const seen = false;
    const timeString = `${(lastTimeInTeam.getHours().toString()).length<2 ? '0'+lastTimeInTeam.getHours().toString() : lastTimeInTeam.getHours().toString()}:${(lastTimeInTeam.getMinutes().toString()).length<2 ? '0'+lastTimeInTeam.getMinutes().toString() : lastTimeInTeam.getMinutes().toString()}`
    return (
        <View style = {{flexDirection: 'row', backgroundColor: !seen? '#efefef' : '#fbfbfb', opacity: !seen?1:0.8, borderRadius: 20, padding:12, justifyContent: 'space-between'}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>

                <Image source={{uri: 'https://cdn.chotot.com/RmRWI36yk-97axWQ0Le92aDF4wP-hgG3Cx3gsX6t-KY/preset:view/plain/903625df9c042491bead551c2b12856c-2921027247892206895.jpg'}} style = {{width: 50, height: 50, borderRadius: 50}}/>
                <Space space={12}/>
                <View>
                    <Title title={name} color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={6}/>
                    <Title title={"You have 2 notifications and 9+ messages"} color={GrayColor} size={12} type={false} horizontalPadding={0} verticalPadding={0}/>
                </View>
            </View>
            <Title title={timeString} color={GrayColor} size={12} type={true} horizontalPadding={0} verticalPadding={0}/>
        </View>
    )
}