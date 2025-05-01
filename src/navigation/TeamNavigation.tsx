import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskScreen } from '../screens/TaskScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { PomodoroScreen } from '../screens/PomodoroScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { RankScreen } from '../screens/RankScreen';
import { CalendarString, ChatString, PomodoroString, RankString, TaskString, TeamInfoString } from '../constants/screen';
import DashBoardIcon from '../assets/icons/DashBoardIcon';
import { PrimaryColorRed } from '../assets/color';
import CalendarIcon from '../assets/icons/CalendarIcon';
import ClockIcon from '../assets/icons/ClockIcon';
import ChatIcon from '../assets/icons/ChatIcon';
import UserIcon from '../assets/icons/UserIcon';
import { View } from 'react-native';
import CommunityIcon from '../assets/icons/CommunityIcon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TeamScreen } from '../screens/TeamScreen';


const Stack = createNativeStackNavigator();

export const TeamNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={TeamInfoString}>
            <Stack.Screen name={TeamInfoString} component={TeamScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};
