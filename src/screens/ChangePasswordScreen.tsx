import { Alert, TextInput, TouchableOpacity, View } from "react-native"
import { Title } from "../components/Title"
import { BubbleColor, PrimaryColorRed, WhiteColor } from "../assets/color"
import { Input } from "../components/Input"
import { InputNormal } from "../constants/strings"
import { useState } from "react"
import { Space } from "../components/Space"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { RouteProp, useNavigation } from "@react-navigation/native"
import { verifyForgotOTP } from "../services/verifyFogotOTP"
import { resetPass } from "../services/resetPassword"
import { MainStackString } from "../constants/screen"

type ChangePasswordScreenParams = {
    token:string,
}
type RootStackParamList = {
    ChangePassword: ChangePasswordScreenParams;
};
type ChangePasswordScreenRouteProp = RouteProp<RootStackParamList, "ChangePassword">;
export const ChangePasswordScreen = ({route}: {route: ChangePasswordScreenRouteProp})=>{
    const {token} = route.params;
    const [newPass, setNewPass] = useState("");
    const navigation = useNavigation();
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <OverlayBubbleAnimation/>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>

                <Title title = "Change your password" size={28} color={PrimaryColorRed} type = {true} horizontalPadding={0} verticalPadding={0}/>
                <Space space={24}/>
                {/* <Input placeholder={'Email or Username'} type={InputNormal} value={newPass} onChangeText={(value)=>setNewPass(value)} /> */}
                <TextInput placeholder="New password" value={newPass} onChangeText={(value)=>{setNewPass(value)}} style = {{paddingTop: 16, paddingBottom: 16, paddingLeft: 24, paddingRight: 24, borderRadius: 24, color: PrimaryColorRed, backgroundColor: BubbleColor}}/>
                <Space space={24}/>
                <View style = {{width: '100%', alignItems: 'flex-end', paddingTop: 16, paddingBottom: 16, paddingLeft: 24, paddingRight: 24, backgroundColor: PrimaryColorRed, borderRadius: 24}}>
                    <TouchableOpacity onPress={()=>{
                        resetPass({token: token, new_password: newPass})
                            .then(res=>{
                                console.log("Reset password successfully");
                                navigation.navigate(MainStackString);
                            })
                            .catch(error=>{
                                console.log("Reset password error with message:", error);
                                Alert.alert("Change password error");
                            })
                    }}>
                        <Title title="Change password" color={WhiteColor} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}