import { Image, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor, NotificationColor, PrimaryColorRed } from "../assets/color"
import CrownIcon from "../assets/icons/CrownIcon"
import SilverMedal from "../assets/icons/SilverMedal"
import BronzeMedal from "../assets/icons/BronzeMedal"
import { AppPadding } from "../constants/spaces"
import { Space } from "./Space"
import { AvataBaseWord } from "./AvataBaseWord"

type TopRankElementProps = {
    top: number,
    name: string,
    score: number, 
}

export const TopRankElement = ({top, name, score} : TopRankElementProps)=>{
    return (
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: BackgroundColor, borderRadius: 20, marginTop: 12, padding:AppPadding, paddingTop: 12, paddingBottom: 12}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <AvataBaseWord full_name={name?name: "Anonimous User"} customSize={60}/>
                    <Space space={12}/>
                    <View>
                        <Title title={name?name: "Anonimous User"} color={GrayColor} type={true} size={16} horizontalPadding={0} verticalPadding={0}/>
                        <Title title={`Score: ${score.toString()}`} color={GrayColor} type={false} size={14} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                </View>
            </View>
            {top === 1 && 
                <CrownIcon width={50} height={50} color={NotificationColor}/>
            }
            {top === 2 && 
                <SilverMedal width={50} height={50} color={NotificationColor}/>
            }
            {top === 3 && 
                <BronzeMedal width={50} height={50} color={NotificationColor}/>
            }
            {top>=4 &&
                <View style = {{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 50, borderWidth: 1, borderColor: PrimaryColorRed}}>
                        <Title title={top.toString()} color={GrayColor} type={false} size={14} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                    
                </View>
            }
        </View>
    )
}