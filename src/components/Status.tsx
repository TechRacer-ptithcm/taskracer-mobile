import { View } from "react-native"
import { Title } from "./Title"
import { GrayColor, WhiteColor } from "../assets/color"

type StatusParams = {
    content: string,
    backgroundColor: string,
    borderColor: string,
}
export const Status = ({content, backgroundColor, borderColor}: StatusParams)=>{
    return (
        <View style = {{padding:6, paddingTop: 0, paddingBottom: 0, borderWidth: 1, borderColor: borderColor, borderRadius: 6, backgroundColor: backgroundColor}}>
            <Title title={content} size={12} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={12}/>
        </View>
    )
}