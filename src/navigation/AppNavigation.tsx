import { NavigationContainer } from '@react-navigation/native';
import { loadingSelector, userSelector } from '../redux/selectors/authSelectors';
import { useAppSelector } from '../redux/hooks';
import { AuthNavigator } from './AuthNavigator';
import { BottomBarNavigator } from './BottomBarNavigator';


export const AppNavigation = () => {
    const loading = useAppSelector(loadingSelector);
    const user : any = useAppSelector(userSelector);
    return (
        <NavigationContainer>
            {loading && <></>}
            {!user ? <AuthNavigator/> : <BottomBarNavigator/>}
        </NavigationContainer>
    );
};
