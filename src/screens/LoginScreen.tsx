import { Alert, TouchableOpacity, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { Space } from '../components/Space';
import { GrayColor, PrimaryColorRed, PurpleColor, WhiteColor } from '../assets/color';
import { Title } from '../components/Title';
import { useState } from 'react';
import { Input } from '../components/Input';
import { InputEmail, InputPassword } from '../constants/strings';
import { AppPadding } from '../constants/spaces';
import { Button } from '../components/Button';
import { ClickableCircle } from '../components/ClickableCircle';
import GoogleIcon from '../assets/icons/GoogleIcon.jsx';
import { validateEmail, validatePassword } from '../utils/auth.ts';
import { useNavigation } from '@react-navigation/native';
import { RegisterString } from '../constants/screen.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
export const LoginScreen = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const handleLogin = ()=>{
        if (!password || !email){
            Alert.alert('Please provide enough field');
        } else{
            //sent to server
        }
    };
    const handleForgotPassword = ()=>{
        // do something
    };
    const handleLoginWithGoogle = ()=>{
        // do something
    };
    return (
        <View style = {{position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center', padding: AppPadding}} >
            <OverlayBubbleAnimation/>
            <Title title = "Login here" size={28} color={PrimaryColorRed}/>
            <Space space={10}/>
            <Title title = "Welcome back you’ve been missed" size = {20} color = {GrayColor}/>
            <Space space={50}/>
            <Input placeholder={'Email'} type={InputEmail} value={email} onChangeText={setEmail} />
            <Input placeholder={'Password'} type={InputPassword} value={password} onChangeText={setPassword} />
            <View style = {{width: '100%', alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Title title="Forgot password" color={PrimaryColorRed} size={12}/>
                </TouchableOpacity>
            </View>
            <Space space={20}/>
            <Button title="Sign in" color={PrimaryColorRed} fullWidth={true} disable={(validatePassword(password) && validateEmail(email)) ? false : true} onClick={handleLogin}/>
            <Space space={8}/>
            <TouchableOpacity onPress={()=>{}}>
                <Title title="Haven't had account? Register" color={PrimaryColorRed} size={12}/>
            </TouchableOpacity>
            <Space space={30}/>

            <Title title="Or continue with" color={PrimaryColorRed} size={12}/>
            <ClickableCircle size={50} color={WhiteColor} onPress={handleLoginWithGoogle}>
                <GoogleIcon width={24} height={24} color={PurpleColor}/>
            </ClickableCircle>
        </View>
    );
};
