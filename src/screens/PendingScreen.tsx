import { Text, View } from 'react-native';
import { GrayColor } from '../assets/color';


export const PendingScreen = () => {

    return (
        <View style = {
            // eslint-disable-next-line react-native/no-inline-styles
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: GrayColor,
            }
        }>
            <Text>Loading</Text>
        </View>
    );
};
