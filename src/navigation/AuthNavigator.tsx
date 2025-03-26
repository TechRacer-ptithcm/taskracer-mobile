
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ChangePassString, EditUserString, LoginString, OtpString, RegisterString } from '../constants/screen';
import { OTPScreen } from '../screens/OTPScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { EditUserScreen } from '../screens/EditUserScreen';

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={LoginString}>
            <Stack.Screen name={LoginString} component={LoginScreen} options={{headerTitle: 'Login'}}/>
            <Stack.Screen name={RegisterString} component={RegisterScreen} options={{headerTitle: 'Register'}}/>
            <Stack.Screen name={OtpString} component={OTPScreen} options={{headerTitle: 'Otp Verify'}}/>
            <Stack.Screen name={ChangePassString} component={ChangePasswordScreen} options={{headerTitle: 'Change Password'}}/>
            <Stack.Screen name={EditUserString} component={EditUserScreen} options={{headerTitle: 'Edit User'}}/>
        </Stack.Navigator>
    );
};
