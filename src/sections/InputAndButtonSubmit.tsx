import { View } from "react-native"
import { Input } from "../components/Input"
import { Space } from "../components/Space"
import { Button } from "../components/Button"
import { BackgroundColor, PrimaryColorBlue } from "../assets/color"
import { InputNormal } from "../constants/strings"

type InputAndButtonSubmitParams = {
    placeholder: string;
    valueInput: string;
    onValueChange: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: ()=>void;
}

export const InputAndButtonSubmit = ({placeholder, valueInput, onValueChange, onSubmit}: InputAndButtonSubmitParams)=>{
    return (
        <View style = {{transform: [{translateY: 60}], width: '100%', position: 'absolute', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: BackgroundColor, borderRadius: 12, paddingLeft: 12, paddingRight: 12}}>
            <View style = {{flex: 1}}>
                <Input placeholder={placeholder} type={InputNormal} value={valueInput} onChangeText={(value)=>onValueChange(value)}/>
            </View>
            <Space space={12}/>
            <View>
                <Button title="Add" color={PrimaryColorBlue} fullWidth={false} disable={false} onClick={onSubmit}/>
            </View>
        </View>
    )
}