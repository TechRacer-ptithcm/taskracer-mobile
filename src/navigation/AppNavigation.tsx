import { NavigationContainer } from '@react-navigation/native';
import { userSelector } from '../redux/selectors/authSelectors';
import { useAppSelector } from '../redux/hooks';
import { AuthNavigator } from './AuthNavigator';
import { BottomBarNavigator } from './BottomBarNavigator';
import { loadingSelector } from '../redux/selectors/appSelectors';
import { Loading } from '../components/Loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackString, MainStackString, TaskInfoString, TaskStackString } from '../constants/screen';
import { TaskNavigator } from './TaskNavigation';
import { TaskInfoScreen } from '../screens/TaskInfoScreen';

const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
    const loading = useAppSelector(loadingSelector);
    const user : any = useAppSelector(userSelector);
    return (
        <NavigationContainer>
            {/* {!user ? <AuthNavigator/> : <BottomBarNavigator/>} */}
            <Stack.Navigator initialRouteName={user?MainStackString:AuthStackString}>
                <Stack.Screen name={AuthStackString} component={AuthNavigator} options={{headerShown: false}}/>

                <Stack.Screen name={TaskInfoString} component={TaskInfoScreen} options={{headerShown: false}}/>

                <Stack.Screen name={MainStackString} component={BottomBarNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
            {loading && <Loading/>}
        </NavigationContainer>
    );
};
