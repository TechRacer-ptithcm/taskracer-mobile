
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ChangePassString, EditUserString, LoginString, OtpString, RegisterString, TaskInfoString, TaskString } from '../constants/screen';
import { OTPScreen } from '../screens/OTPScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { EditUserScreen } from '../screens/EditUserScreen';
import DashBoardIcon from '../assets/icons/DashBoardIcon';
import { TaskScreen } from '../screens/TaskScreen';
import { PrimaryColorRed } from '../assets/color';
import { TaskInfoScreen } from '../screens/TaskInfoScreen';

const Stack = createNativeStackNavigator();
export const TaskNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={TaskInfoString}>
            <Stack.Screen name={TaskInfoString} component={TaskInfoScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};
