import { Alert, NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, Touchable, TouchableOpacity, View } from "react-native"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { Title } from "../components/Title"
import { BackgroundColor, BubbleColor, GrayColor, PrimaryColorRed } from "../assets/color"
import { useEffect, useRef, useState } from "react"
import { RouteProp, useNavigation } from "@react-navigation/native"
import { setLoading } from "../redux/slices/appSlice"
import { useAppDispatch } from "../redux/hooks"
import { ChangePassString, EditUserString, LoginString, MainStackString, RegisterString } from "../constants/screen"
import { resentOTP } from "../services/resendOTP"
import { sentOTP } from "../services/sendOTP"
import { verifyUser } from "../services/verifyUser"
import { ChangePasswordScreen } from "./ChangePasswordScreen"
import { verifyForgotOTP } from "../services/verifyFogotOTP"


type OTPScreenParams = {
    account:string,
    type: string,
}
type RootStackParamList = {
    OTP: OTPScreenParams;
};
type OTPScreenRouteProp = RouteProp<RootStackParamList, "OTP">;
export const OTPScreen = ({route}: {route: OTPScreenRouteProp})=>{
    const {account, type} = route.params;
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const inputRefs = Array(6).fill(null).map(() => useRef(null));
    const [otp, setOtp] = useState(Array(6).fill(""));
    const handleChange = (text:string, index:number) => {
        if (text.length > 1) return; // Chỉ nhận 1 ký tự
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Chuyển đến ô tiếp theo nếu có nhập
        if (text && index < 5) {
            inputRefs[index + 1].current.focus();
        }
        if (newOtp[0] && newOtp[1] && newOtp[2] && newOtp[3] && newOtp[4] && newOtp[5]){
            //let's check and reset password.
            dispatch(setLoading(true));
            if (type === RegisterString){
                const otpCode = newOtp.join('');
                verifyUser({otp: otpCode})
                    .then(res=>{
                        if (res && res.status){
                            navigation.navigate(EditUserString);
                        }
                    })
                    .catch(error=>{
                        console.log("After verifying error with message:", error);
                    })
                    .finally(()=>{
                        dispatch(setLoading(false));
                    })
            } else {
                const otpCode = newOtp.join('');
                verifyForgotOTP({otp: otpCode})
                    .then(res=>{
                        if (res && res.status){
                            navigation.navigate(ChangePassString, {token: res.data.token})
                        }
                    })
                    .catch(error=>{
                        console.log("After verifying error with message:", error);
                    })
                    .finally(()=>{
                        dispatch(setLoading(false));
                    })
            }
        }
    };

    const handleKeyPress = (event:NativeSyntheticEvent<TextInputKeyPressEventData>, index:number) => {
        if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };
    const handleReSentEmail = async (account: string)=>{
        console.log(account, "ACOUNT")
        dispatch(setLoading(true));
        return await resentOTP({account})
            .then((res)=>{
                if (res && res.status){
                    Alert.alert("Resend OTP successfully")
                    dispatch(setLoading(false));
                }
            })
            .catch(error=>{
                console.log("After sending OTP error with message:", error)
            })
    }

    return (
        <View style = {{flex: 1, position: 'relative'}}>
            <OverlayBubbleAnimation/>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Title title="OTP code" size={28} type={true} color={PrimaryColorRed} horizontalPadding={0} verticalPadding={0}/>
                <Title center={true} title = "Verify the OTP code sent to your email to reset the password." size = {18} color = {GrayColor} type = {true} horizontalPadding={0} verticalPadding={8}/>
                <View style = {{flexDirection: 'row', marginTop: 24}}>
                    {
                        otp.map((value, index)=>{
                            return (
                                <TextInput key={index}
                                    ref={inputRefs[index]}
                                    value={value}
                                    onChangeText={(text)=>{
                                        handleChange(text, index)
                                    }}
                                    onKeyPress={(event) => handleKeyPress(event, index)}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    returnKeyType="next"
                                    autoFocus={index === 0} 
                                    style = {{
                                        padding: 12, 
                                        paddingLeft:18, 
                                        color: GrayColor, 
                                        paddingRight: 18, 
                                        fontSize: 28, 
                                        backgroundColor: BubbleColor, 
                                        borderRadius: 8, 
                                        fontFamily: 'DynaPuff-Bold', 
                                        borderWidth: 2, 
                                        borderColor: BackgroundColor
                                    }}
                                />
                            )
                        })
                    }
                </View>
                <TouchableOpacity style = {{marginTop: 24}} onPress={()=>{
                    handleReSentEmail(account)
                }}>
                    <Title title="You haven't received? Resend it" color={PrimaryColorRed} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}