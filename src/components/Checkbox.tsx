import { Text, TouchableOpacity, View } from "react-native"
import { EnumGender } from "../constants/enums";

type CheckboxParams = {
    listOptions: React.JSX.Element[];
    checkedIndex: number;
    setCheckedHandler: React.Dispatch<React.SetStateAction<any>>;
}


export const Checkbox = ({listOptions, checkedIndex, setCheckedHandler}: CheckboxParams)=>{
    return (
        <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            {
                listOptions.map((option, index)=>{
                    return (
                        <TouchableOpacity onPress={()=>setCheckedHandler(index)} key={index} style={{alignItems: 'center', paddingStart: 6, paddingEnd: 6}}>
                            {option}
                            <Text>{checkedIndex === index ? "☑" : "☐"}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            
        </View>
    )
}