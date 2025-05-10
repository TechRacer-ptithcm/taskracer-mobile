import { TouchableOpacity, View } from "react-native"
import UserIcon from "../assets/icons/UserIcon"
import { BackgroundColor, GrayColor } from "../assets/color"
import { Title } from "./Title"
import EditIcon from "../assets/icons/EditIcon"
import { Space } from "./Space"

type InfoTagEditableProps = {
    title: string,
    icon: React.JSX.Element,
    onPress: ()=>any
}

export const InfoTagEditable = ({title, icon, onPress}:InfoTagEditableProps)=>{
    return (
        <TouchableOpacity style = {{width: "100%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: BackgroundColor, borderRadius: 20, padding: 12}} onPress={onPress}>
            <View style={{flexDirection: 'row'}}>
                {icon}
                <Space space={12}/>

                <Title title={title} color={GrayColor} size={18} type ={true} horizontalPadding={0} verticalPadding={0}/>
            </View>
            {/* <EditIcon width={32} height={32} color={GrayColor}/> */}
        </TouchableOpacity>
    )
}