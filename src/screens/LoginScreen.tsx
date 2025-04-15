import { Alert, TouchableOpacity, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { Space } from '../components/Space';
import { GrayColor, PrimaryColorRed, PurpleColor, WhiteColor } from '../assets/color';
import { Title } from '../components/Title';
import { useCallback, useEffect, useState } from 'react';
import { Input } from '../components/Input';
import { InputEmail, InputNormal, InputPassword } from '../constants/strings';
import { AppPadding } from '../constants/spaces';
import { Button } from '../components/Button';
import { ClickableCircle } from '../components/ClickableCircle';
import GoogleIcon from '../assets/icons/GoogleIcon.jsx';
import { validateEmail, validatePassword } from '../utils/auth.ts';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/login';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setPomoMode } from '../redux/slices/appSlice';
import { Loading } from '../components/Loading';
import { useAppDispatch } from '../redux/hooks';
import store from '../redux/store';
import { loadingSelector, pomoModeSelector } from '../redux/selectors/appSelectors';
import { setToken, setUser } from '../redux/slices/authSlice';
import { LoginString, MainStackString, OtpString, RegisterString } from '../constants/screen';
import { sentOTP } from '../services/sendOTP';
import { getUserInfo } from '../services/getUserInfo';
import { setItem } from '../configs/localStorage';
export const LoginScreen = () => {
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');
    const loading = useSelector(loadingSelector);

    const dispatch = useAppDispatch()
    const navigation = useNavigation();
    const handleLogin = async ()=>{
        if (!password || !account){
            Alert.alert('Please provide enough field');
        } else{
            dispatch(setLoading(true))
            return await login({account, password})
                .then((res) => {
                console.log("Login successfully", res.data);
                return res.data;
                })
                .then(res=>{
                    if (res){
                        //set actk
                        if (res.data.access_token){
                            dispatch(setToken(res.data.access_token));
                            dispatch(setLoading(false))
                            navigation.navigate(MainStackString)
                            dispatch(setUser({ah:'a'}))
                        }
                    }
                    return res
                })
                .then(res=>{
                    getUserInfo({token: res.data.access_token})
                        .then(res=>{
                            const user = res.data.data.id;
                            setItem('user', user);
                        })
                })
                .catch(error=>{
                    console.log("Login error with message:", error);
                    dispatch(setLoading(false));
                    Alert.alert("Username or password is not valid.")
                })
        }
    };
    const handleForgotPassword = async ()=>{
        if (account){
            dispatch(setLoading(true))
            await sentOTP({account})
                .then(res=>{
                    if (res && res.status){
                        dispatch(setLoading(false));
                        navigation.navigate(OtpString, {account: account, type: LoginString});
                    } else{
                        Alert.alert("Username is not valid.")
                        dispatch(setLoading(false));
                    }
                })
                .catch(error=>{
                    console.log("After sending OTP error with message:", error)
                })

        } else{
            Alert.alert("Provide your username or email to reset password")
        }
    };
    const handleLoginWithGoogle = ()=>{
        // do something
    };
    return (
        <View style = {{position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center', padding: AppPadding}} >
            <OverlayBubbleAnimation/>
            <Title title = "Login here" size={28} color={PrimaryColorRed} type = {true} horizontalPadding={0} verticalPadding={0}/>
            <Space space={10}/>
            <Title title = "Welcome back you’ve been missed" size = {20} color = {GrayColor} type = {true} horizontalPadding={0} verticalPadding={0}/>
            <Space space={50}/>
            <Input placeholder={'Email or Username'} type={InputNormal} value={account} onChangeText={setAccount} />
            <Input placeholder={'Password'} type={InputPassword} value={password} onChangeText={setPassword} />
            <View style = {{width: '100%', alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Title title="Forgot password" color={PrimaryColorRed} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
                </TouchableOpacity>
            </View>
            <Space space={20}/>
            <Button title="Sign in" color={PrimaryColorRed} fullWidth={true} disable={(validatePassword(password)&&account.length!=0) ? false : true} onClick={handleLogin}/>
            <Space space={8}/>
            <TouchableOpacity onPress={()=>{navigation.navigate(RegisterString)}}>
                <Title title="Haven't had account? Register" color={PrimaryColorRed} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
            </TouchableOpacity>
            <Space space={30}/>

            <Title title="Or continue with" color={PrimaryColorRed} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
            <ClickableCircle size={50} color={WhiteColor} onPress={handleLoginWithGoogle}>
                <GoogleIcon width={24} height={24} color={PurpleColor}/>
            </ClickableCircle>
        </View>
    );
};
