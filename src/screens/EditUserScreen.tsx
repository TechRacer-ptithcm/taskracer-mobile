import { View } from "react-native"
import { Title } from "../components/Title"
import { PrimaryColorRed } from "../assets/color"
import { Input } from "../components/Input"
import { InputNormal } from "../constants/strings"



export const EditUserScreen = () => {
    return (
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <Title title="Update your infomation" color={PrimaryColorRed} size={18} type={true} horizontalPadding={0} verticalPadding={0} center={true}/>
                <Input placeholder="Your full name" value="" onChangeText={()=>{}} type={InputNormal}/>
            </View>
        </View>
    )
}