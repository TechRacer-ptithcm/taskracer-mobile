import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskScreen } from '../screens/TaskScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { PomodoroScreen } from '../screens/PomodoroScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { RankScreen } from '../screens/RankScreen';
import { CalendarString, ChatString, PomodoroString, RankString, SocialString, TaskString } from '../constants/screen';
import DashBoardIcon from '../assets/icons/DashBoardIcon';
import { PrimaryColorRed } from '../assets/color';
import CalendarIcon from '../assets/icons/CalendarIcon';
import ClockIcon from '../assets/icons/ClockIcon';
import ChatIcon from '../assets/icons/ChatIcon';
import UserIcon from '../assets/icons/UserIcon';
import { View } from 'react-native';
import CommunityIcon from '../assets/icons/CommunityIcon';
import { TeamNavigation } from './TeamNavigation';


const BottomBarStack = createBottomTabNavigator();

export const BottomBarNavigator = () => {
    return (
        <BottomBarStack.Navigator>
            <BottomBarStack.Screen name={TaskString} component={TaskScreen} options={{headerShown: false, tabBarIcon(props) {
                return <DashBoardIcon size={32} color={props.focused ? PrimaryColorRed : '#000'} />;
            }, tabBarShowLabel: false}}/>
            <BottomBarStack.Screen name={CalendarString} component={CalendarScreen} options={{headerShown: false, tabBarShowLabel: false, tabBarIcon(props) {
                return <CalendarIcon size={32} color={props.focused ? PrimaryColorRed : '#000'} />;
            }}}/>
            <BottomBarStack.Screen name={PomodoroString} component={PomodoroScreen} options={{headerShown: false, tabBarShowLabel: false, tabBarIcon(props) {
                return <ClockIcon size={32} color={props.focused ? PrimaryColorRed : '#000'} />;
            }}}/>
            <BottomBarStack.Screen name={ChatString} component={ChatScreen} options={{headerShown: false, tabBarShowLabel: false, tabBarIcon(props) {
                return <CommunityIcon size={32} color={props.focused ? PrimaryColorRed : '#000'} />;
            }}}/>
            <BottomBarStack.Screen name={RankString} component={RankScreen} options={{headerShown: false, tabBarShowLabel: false, tabBarIcon(props) {
                return <UserIcon size={32} color={props.focused ? PrimaryColorRed : '#000'} />;
            }}}/>
        </BottomBarStack.Navigator>
    );
};
