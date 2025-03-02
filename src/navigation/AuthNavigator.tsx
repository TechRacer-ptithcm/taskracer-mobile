
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoginString, OtpString, RegisterString } from '../constants/screen';
import { OtpVerifyScreen } from '../screens/OtpVerifyScreen';

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={RegisterString}>
            <Stack.Screen name={LoginString} component={LoginScreen} options={{headerTitle: 'Login'}}/>
            <Stack.Screen name={RegisterString} component={RegisterScreen} options={{headerTitle: 'Register'}}/>
            <Stack.Screen name={OtpString} component={OtpVerifyScreen} options={{headerTitle: 'Otp Verify'}}/>
        </Stack.Navigator>
    );
};
