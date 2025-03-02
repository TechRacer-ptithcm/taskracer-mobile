import { useState } from 'react';
import { View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { AppPadding } from '../constants/spaces';
import { Title } from '../components/Title';
import { Space } from '../components/Space';
import { GrayColor, PrimaryColorRed } from '../assets/color';
import { Input } from '../components/Input';
import { InputNormal } from '../constants/strings';
import { Button } from '../components/Button';


export const OtpVerifyScreen = ()=>{
    const [otp, setOtp] = useState('');
    const handleSendOTP = () => {
        if (otp){
            //send otp to server
        }
    };
    return (
        <View style = {{position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center', padding: AppPadding}} >
            <OverlayBubbleAnimation/>
            <Title title = "Type OTP code" size={28} color={PrimaryColorRed}/>
            <Space space={10}/>
            <Title title = "Type the OTP code sent to your email" size = {16} color = {GrayColor}/>
            <Space space={30}/>
            <Input placeholder={'OTP code'} type={InputNormal} value={otp} onChangeText={setOtp} />
            <Space space={30}/>
            <Button title="Verify" color={PrimaryColorRed} fullWidth={true} disable={!otp} onClick={handleSendOTP}/>
        </View>
    );
};
