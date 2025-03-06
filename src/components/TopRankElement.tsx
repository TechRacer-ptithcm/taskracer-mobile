import { Image, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor, NotificationColor } from "../assets/color"
import CrownIcon from "../assets/icons/CrownIcon"
import SilverMedal from "../assets/icons/SilverMedal"
import BronzeMedal from "../assets/icons/BronzeMedal"
import { AppPadding } from "../constants/spaces"
import { Space } from "./Space"

type TopRankElementProps = {
    top: number,
    avata: string,
    name: string,
    timeMilisecond: number, 
}

export const TopRankElement = ({top, avata, name, timeMilisecond} : TopRankElementProps)=>{
    return (
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: BackgroundColor, borderRadius: 20, marginTop: 12, padding:AppPadding, paddingTop: 12, paddingBottom: 12}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <View style = {{aspectRatio: 1, borderRadius: 40, width: 40, height: 40, borderWidth: 1, borderColor: GrayColor, justifyContent: 'center', alignItems: 'center'}}>
                    <Title title={top.toString()} color={GrayColor} type={false} size={12} horizontalPadding={0} verticalPadding={0}/>
                </View>
                <Space space={24}/>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: 'https://images2.thanhnien.vn/zoom/686_429/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg'}} style = {{width: 60, height: 60, borderRadius: 60}}/>
                    <Space space={12}/>
                    <View>
                        <Title title={name} color={GrayColor} type={true} size={16} horizontalPadding={0} verticalPadding={0}/>
                        <Title title={'13h35m'} color={GrayColor} type={false} size={14} horizontalPadding={0} verticalPadding={0}/>
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
                <View style = {{width: 50, height: 50}}></View>
            }
        </View>
    )
}