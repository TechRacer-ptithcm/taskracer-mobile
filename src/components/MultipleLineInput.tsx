import { Text, TextInput, View } from 'react-native';
import { InputConfirmPassword, InputEmail, InputNormal, InputPassword } from '../constants/strings';
import { BubbleColor, PrimaryColorRed, WarningColor, WhiteColor } from '../assets/color';
import { validateEmail, validatePassword } from '../utils/auth';


type InputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const MultipleLinesInput = ({placeholder, value, onChangeText}: InputProps) => {
    return (
        <View style={{width: '100%', justifyContent: 'center'}}>
            <View style={
                {
                    width: '100%',
                    padding: 10,
                    backgroundColor: BubbleColor,
                    marginBottom: 10,
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: WhiteColor ,
                    borderRadius: 20,
                    height: 100,
                }
            }>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        style={{padding: 10, color: PrimaryColorRed}}
                        placeholderTextColor={PrimaryColorRed}
                        multiline={true}
                    />
            </View>
        </View>
    );
};
