import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskScreen } from '../screens/TaskScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { PomodoroScreen } from '../screens/PomodoroScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { RankScreen } from '../screens/RankScreen';
import { CalendarString, ChatString, PomodoroString, RankString, TaskString } from '../constants/screen';


const BottomBarStack = createBottomTabNavigator();

export const BottomBarNavigator = () => {
    return (
        <BottomBarStack.Navigator>
            <BottomBarStack.Screen name={TaskString} component={TaskScreen} options={{headerShown: false}}/>
            <BottomBarStack.Screen name={CalendarString} component={CalendarScreen} options={{headerShown: false}}/>
            <BottomBarStack.Screen name={PomodoroString} component={PomodoroScreen} options={{headerShown: false}}/>
            <BottomBarStack.Screen name={ChatString} component={ChatScreen} options={{headerShown: false}}/>
            <BottomBarStack.Screen name={RankString} component={RankScreen} options={{headerShown: false}}/>
        </BottomBarStack.Navigator>
    );
};
