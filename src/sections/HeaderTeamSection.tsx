import { Image, View } from "react-native"
import { AppPadding } from "../constants/spaces"
import { GrayColor, WhiteColor } from "../assets/color"
import EarthIcon from "../assets/icons/EarthIcon"
import { Title } from "../components/Title"
import { Space } from "../components/Space"




export const HeaderTeamSection = ()=>{
    const nameGroup = 'Successfull people community'
    return (
        <View style={{margin: AppPadding/2, marginTop: 0, overflow: 'hidden', backgroundColor: WhiteColor, borderRadius: 12, elevation: 5}}>
            <Image
                source={require('../assets/images/group_image.jpeg')}
                style = {{width: '100%', height: 200}}
            />
            <Title title={nameGroup} color={GrayColor} size={18} type = {true} horizontalPadding={AppPadding/2} verticalPadding={AppPadding/3}/>
            
            <View style = {{flexDirection: 'row', alignItems: 'center', padding: AppPadding/2, paddingTop: 0}}>
                <EarthIcon width={24} height={24} color={GrayColor}/>
                <Space space={6}/>
                <Title title="Public" color={GrayColor} size={12} type = {false} horizontalPadding={0} verticalPadding={0}/>
                
            </View>
        </View>
    )
}