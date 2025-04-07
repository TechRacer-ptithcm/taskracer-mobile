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
import { useEffect } from 'react';

export type AppStackParamList = {
    [AuthStackString]: undefined;
    [TaskInfoString]: {taskId: string};
    [MainStackString]: undefined
}
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppNavigation = () => {
    const loading = useAppSelector(loadingSelector);
    useEffect(()=>{
        console.log('loading change')
    }, [loading])
    const user : any = useAppSelector(userSelector);
    return (
        <NavigationContainer>
            {/* {!user ? <AuthNavigator/> : <BottomBarNavigator/>} */}
            <Stack.Navigator initialRouteName={user?MainStackString:AuthStackString}>
                <Stack.Screen name={AuthStackString} component={AuthNavigator} options={{headerShown: false}}/>

                <Stack.Screen name={TaskInfoString} options={{headerShown: false}}>
                    {(props)=><TaskInfoScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen name={MainStackString} component={BottomBarNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
            {loading && <Loading/>}
        </NavigationContainer>
    );
};
