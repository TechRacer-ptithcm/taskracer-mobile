import { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { Title } from '../components/Title';
import { GrayColor, PrimaryColorRed, PurpleColor, WhiteColor } from '../assets/color';
import { Space } from '../components/Space';
import { Input } from '../components/Input';
import { InputEmail, InputNormal, InputPassword } from '../constants/strings';
import { Button } from '../components/Button';
import { ClickableCircle } from '../components/ClickableCircle';
import GoogleIcon from '../assets/icons/GoogleIcon';
import { AppPadding } from '../constants/spaces';
import { validateEmail, validatePassword } from '../utils/auth';
import { register } from '../services/register';
import { useNavigation } from '@react-navigation/native';
import { sentOTP } from '../services/sendOTP';
import { LoginString, OtpString, RegisterString } from '../constants/screen';

export const RegisterScreen = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleSignUp = async ()=>{
        if (!userName || !email || !password){
            Alert.alert("Please provide enough field")
        } else{
            await register({username:userName, password, email})
                .then(res=>{
                    //navigate to otp
                    if (res && res.data.username){
                        navigation.navigate(OtpString, {account:res.data.username, type: RegisterString});
                    }
                })
                .catch(error=>{
                    console.log("After registering error with message:", error);
                })
        }
    }
    return (
        <View style = {{position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center', padding: AppPadding}} >
            <OverlayBubbleAnimation/>
            <Title title = "Register here" size={28} color={PrimaryColorRed} type = {true} horizontalPadding={0} verticalPadding={0}/>
            <Space space={10}/>
            <Title center={true} title = "Create an account so you can live your better life" size = {16} color = {GrayColor} type = {true} horizontalPadding={0} verticalPadding={0}/>
            <Space space={50}/>
            <Input placeholder={'User name'} type={InputNormal} value={userName} onChangeText={setUserName} />
            <Input placeholder={'Email'} type={InputEmail} value={email} onChangeText={setEmail} />
            <Input placeholder={'Password'} type={InputPassword} value={password} onChangeText={setPassword} />
            <Space space={20}/>
            <Button title="Sign up" color={PrimaryColorRed} fullWidth={true} disable={(userName && validatePassword(password) && validateEmail(email)) ? false : true} onClick={handleSignUp}/>
            <Space space={8}/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate(LoginString)
            }}>
                <Title title="Already have an account? Login" color={PrimaryColorRed} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
            </TouchableOpacity>
            <Space space={30}/>
            <Title title="Or continue with" color={PrimaryColorRed} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
            <ClickableCircle size={50} color={WhiteColor} onPress={() => {}}>
                <GoogleIcon width={24} height={24} color={PurpleColor}/>
            </ClickableCircle>
        </View>
    );
};
