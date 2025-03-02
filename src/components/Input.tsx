import { Text, TextInput, View } from 'react-native';
import { InputConfirmPassword, InputEmail, InputNormal, InputPassword } from '../constants/strings';
import { BubbleColor, PrimaryColorRed, WarningColor, WhiteColor } from '../assets/color';
import { validateEmail, validatePassword } from '../utils/auth';


type InputProps = {
    placeholder: string;
    type: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const Input = ({placeholder, type, value, onChangeText}: InputProps) => {
    return (
        <View style={{width: '100%', justifyContent: 'center'}}>
            {type === InputEmail && !validateEmail(value) && <Text style={{color: WarningColor, fontSize: 12,paddingLeft: 10, marginBottom: -10}}>Email is not valid</Text>}
            {type === InputPassword && !validatePassword(value) && <Text style={{color: WarningColor, fontSize: 12,paddingLeft: 10, marginBottom: -10}}>At least 6 characters</Text>}
            <View style={
                {
                    width: '100%',
                    padding: 10,
                    backgroundColor: BubbleColor,
                    marginBottom: 10,
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: (type === InputEmail && !validateEmail(value)) || (type === InputPassword && !validatePassword(value)) ? WarningColor : WhiteColor ,
                    borderRadius: 20,
                }
            }>
                {type === InputPassword &&
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={true}
                        value={value}
                        onChangeText={onChangeText}
                        style={{padding: 10, color: PrimaryColorRed}}
                        placeholderTextColor={PrimaryColorRed}
                    />
                }
                {type === InputEmail &&
                    <TextInput
                        style = {{padding: 10, color: PrimaryColorRed}}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        aria-label="email"
                        placeholderTextColor={PrimaryColorRed}
                    />
                }
                {type === InputConfirmPassword &&
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={true}
                        value={value}
                        onChangeText={onChangeText}
                        style={{padding: 10, color: PrimaryColorRed}}
                        placeholderTextColor={PrimaryColorRed}
                    />
                }
                {type === InputNormal &&
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        style={{padding: 10, color: PrimaryColorRed}}
                        placeholderTextColor={PrimaryColorRed}
                    />
                }
            </View>
        </View>
    );
};
