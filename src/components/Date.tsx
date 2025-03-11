import { TouchableOpacity, View } from "react-native"
import { Title } from "./Title"
import { GrayColor, PrimaryColorRed, WhiteColor } from "../assets/color"
import { dayString } from "../constants/strings"

type DateComponentParams = {
    dateValue: Date
    onClick: ()=>any
    isFocus: boolean
}

export const DateComponent = ({dateValue, onClick, isFocus}: DateComponentParams)=>{
    return (
        <TouchableOpacity onPress={()=>{onClick()}} style ={{justifyContent: 'center', alignItems: 'center', backgroundColor: isFocus ? PrimaryColorRed : 'transparent', borderRadius: 20, width: 80, height: 100}}>
            <Title title={dayString[dateValue.getDay()]} color={isFocus ? WhiteColor : GrayColor} type = {false} size={12} horizontalPadding={0} verticalPadding={0}/>
            <Title title={dateValue.getDate().toString()} color={isFocus ? WhiteColor : GrayColor} type = {true} size={26} horizontalPadding={0} verticalPadding={0}/>
        </TouchableOpacity>
    )
}