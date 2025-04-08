import { TouchableOpacity, View } from "react-native"
import TodoIcon from "../assets/icons/TodoIcon"
import { GrayColor, WhiteColor } from "../assets/color"
import { Title } from "./Title"
import TaskIcon from "../assets/icons/TaskIcon"
import { Space } from "./Space"

type PopUpAddButtonProps = {
    onClick: React.Dispatch<React.SetStateAction<'TODO'|'TASK'|'CLOSED'|'OPENED'>>;
}

export const PopUpAddButton = ({onClick}: PopUpAddButtonProps)=>{
    return (
        <View style = {{flexDirection: 'row', borderRadius: 12, padding: 12, backgroundColor: WhiteColor, elevation: 4, width: 160, justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={()=>{onClick(pre=>pre=='TODO'?'CLOSED':'TODO')}} style = {{flexDirection: 'row', alignItems: 'center', padding: 4, borderWidth: 1, borderColor: GrayColor}}>
                <TodoIcon width={24} height={24} color={GrayColor}/>
                <Title size={12} color={GrayColor} title={"Todo"} type={false} horizontalPadding={0} verticalPadding={0} center={true}/>
            </TouchableOpacity>
            <Space space={6}/>
            <TouchableOpacity onPress={()=>{onClick(pre=>pre=='TASK'?'CLOSED':'TASK')}} style = {{flexDirection: 'row', alignItems: 'center', padding: 4, borderWidth: 1, borderColor: GrayColor}}>
                <TaskIcon width={24} height={24} color={GrayColor}/>
                <Title size={12} color={GrayColor} title={"Task"} type={false} horizontalPadding={0} verticalPadding={0} center={true}/>
            </TouchableOpacity>
        </View>
    )
}