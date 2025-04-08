import { TouchableOpacity, View } from "react-native";
import { BackgroundColor, GreenColor, PrimaryColorBlue, PrimaryColorRed, RedLight, WhiteColor } from "../assets/color";
import { Priority } from "../components/Priority";
import { EnumPriority } from "../constants/enums"
import { Priorities } from "../constants/strings";


type ListPriorityParams = {
    setPriority: React.Dispatch<React.SetStateAction<'LOW'|'MEDIUM'|'HIGH'>>
}

export const ListPriority = ({setPriority}: ListPriorityParams)=>{
    
    return (
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 5, padding: 12, borderRadius: 12, backgroundColor: BackgroundColor, width: 180}}>
            <TouchableOpacity onPress={()=>{setPriority('LOW')}}>
                <Priority content={"LOW"} backgroundColor={Priorities['LOW'].color} borderColor={Priorities['LOW'].borderColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setPriority('MEDIUM')}}>
                <Priority content={'MEDIUM'} backgroundColor={Priorities['MEDIUM'].color} borderColor={Priorities['MEDIUM'].borderColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setPriority('HIGH')}}>
                <Priority content={"HIGH"} backgroundColor={Priorities['HIGH'].color} borderColor={Priorities['HIGH'].borderColor}/>
            </TouchableOpacity>
        </View>
    )
}