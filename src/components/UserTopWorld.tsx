import { Image, View } from "react-native"
import CrownIcon from "../assets/icons/CrownIcon"
import { GrayColor, GreenColor, NotificationColor, PrimaryColorRed, WhiteColor } from "../assets/color"
import { BronzeI, SilverI } from "../constants/rank"
import SilverIIcon from "../assets/icons/SilverIIcon"
import { Title } from "./Title"
import { Space } from "./Space"
import { Text } from "react-native"
import { AvataBaseWord } from "./AvataBaseWord"


type UserTopWorldProps = {
    name: string,
    rank: string,
    top: number,
    score: number,
}

export const UserTopWorld = ({name, rank, top, score} : UserTopWorldProps)=>{
    let color = PrimaryColorRed;
    if (top === 1){
        color = NotificationColor
    } else if (top === 2){
        color = GreenColor
    }

    return (
        <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style = {{position: 'relative', alignItems: 'center'}}>
                <AvataBaseWord full_name={name?name: "Anonimous User"} customSize={80}/>
                {top===1 && 
                <View style={{position: 'absolute', top: -40}}>
                    <CrownIcon width={60} height={60} color={NotificationColor}/>
                </View>
                }
                {rank === SilverI &&
                <View style={{position: 'absolute', bottom: -10, right: 0}}>
                    <SilverIIcon width={40} height={40}/>
                </View>
                }
            </View>
            <Title title={name?name:"Anonimous User"} size={18} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={6}/>
            <View style ={{padding: 12, paddingLeft: 12, paddingRight: 12, borderRadius: 24, backgroundColor: color}}>
                <Title title={`Score: ${score}`} color={WhiteColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
            </View>

        </View>
    )
}