import { TouchableOpacity, View } from "react-native";
import { BackgroundColor, GreenColor, PrimaryColorBlue, PrimaryColorRed, RedLight, WhiteColor } from "../assets/color";
import { Priority } from "../components/Priority";
import { EnumPriority } from "../constants/enums"


type ListPriorityParams = {
    setPriority: React.Dispatch<React.SetStateAction<number>>
    list: EnumPriority[];
    listBackgroundColor: string[];
    listBorderColor: string[];
}

export const ListPriority = ({setPriority, list, listBackgroundColor, listBorderColor}: ListPriorityParams)=>{
    
    return (
        <View style = {{flexDirection: 'row', alignItems: 'center', elevation: 5, position: 'absolute', top: -80, right: 0, padding: 12, borderRadius: 12, backgroundColor: BackgroundColor}}>
            {
                list.map((item, index)=>{
                    return <TouchableOpacity key={index} onPress={()=>{setPriority(index)}}>
                        <Priority content={item} backgroundColor={listBackgroundColor[index]} borderColor={listBorderColor[index]}/>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}