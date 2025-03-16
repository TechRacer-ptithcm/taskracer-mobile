import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from "react-native"
import { BackgroundColor, BubbleColor, GrayColor, WhiteColor } from "../assets/color";

type InputOneNumberParams = {
    ref: React.MutableRefObject<any>,
    value: string,
    onChangeText: (text:string, index:number)=>void,
    onKeyPress: (event:NativeSyntheticEvent<TextInputKeyPressEventData>, index: number)=>void,
    index: number
}
export const InputOneNumber = ({ref, value, onChangeText, onKeyPress, index}: InputOneNumberParams)=>{
    return (
        
    )
}   