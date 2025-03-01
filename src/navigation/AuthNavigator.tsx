
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoginString, RegisterString } from '../constants/screen';

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={LoginString} component={LoginScreen} options={{headerTitle: 'Login'}}/>
            <Stack.Screen name={RegisterString} component={RegisterScreen} options={{headerTitle: 'Register'}}/>
        </Stack.Navigator>
    );
};
