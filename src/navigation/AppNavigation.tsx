import { NavigationContainer } from '@react-navigation/native';
import { userSelector } from '../redux/selectors/authSelectors';
import { useAppSelector } from '../redux/hooks';
import { AuthNavigator } from './AuthNavigator';
import { BottomBarNavigator } from './BottomBarNavigator';
import { loadingSelector } from '../redux/selectors/appSelectors';
import { Loading } from '../components/Loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackString, MainStackString, SocialString, TaskInfoString, TaskStackString } from '../constants/screen';
import { TaskNavigator } from './TaskNavigation';
import { TaskInfoScreen } from '../screens/TaskInfoScreen';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getItem } from '../configs/localStorage';
import { TeamScreen } from '../screens/TeamScreen';
import { TeamNavigation } from './TeamNavigation';

export type AppStackParamList = {
    [AuthStackString]: undefined;
    [TaskInfoString]: {taskId: string};
    [MainStackString]: undefined
}
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppNavigation = () => {
    const loading = useAppSelector(loadingSelector);
    const [handleLoginState, setHandleLoginState] = useState(false);
    const [userState, setUserState] = useState(false);
    useEffect(()=>{
        getItem('user')
            .then(res=>{
                if (res){
                    setUserState(true);
                    setHandleLoginState(true);
                } else{
                    setHandleLoginState(true);
                }
            })
    }, [])
    const user : any = useAppSelector(userSelector);
    return (
        handleLoginState?
        (
            <NavigationContainer>
                {/* {!user ? <AuthNavigator/> : <BottomBarNavigator/>} */}
                <Stack.Navigator initialRouteName={userState?MainStackString:AuthStackString}>
                    <Stack.Screen name={AuthStackString} component={AuthNavigator} options={{headerShown: false}}/>

                    <Stack.Screen name={TaskInfoString} options={{headerShown: false}}>
                        {(props)=><TaskInfoScreen {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name={MainStackString} component={BottomBarNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name={SocialString} component={TeamNavigation} options={{headerShown: false}}/>
                </Stack.Navigator>
                {loading && <Loading/>}
            </NavigationContainer>
        
        ):
        <View style = {{position: 'relative', flex: 1}}>
            <Loading/>
        </View>
    );
};
