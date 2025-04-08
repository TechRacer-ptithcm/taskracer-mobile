import { TouchableOpacity, View } from "react-native";
import { BackgroundColor, GreenColor, PrimaryColorBlue, PrimaryColorRed, RedLight, WhiteColor } from "../assets/color";
import { EnumPriority } from "../constants/enums"
import { Priorities, Statuses } from "../constants/strings";
import { Status } from "../components/Status";


type ListStatusParams = {
    setStatus: React.Dispatch<React.SetStateAction<'TODO'|'IN_PROGRESS'|'DONE'|'CANCELED'|'IN_REVIEW'|'PENDING'|'IN_TESTING'>>
}

export const ListStatus = ({setStatus}: ListStatusParams)=>{
    
    return (
        <View style = {{elevation: 5, padding: 12, borderRadius: 12, backgroundColor: BackgroundColor, width: 300}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>{setStatus('TODO')}}>
                    <Status content={"TODO"} backgroundColor={Statuses['TODO'].color} borderColor={Statuses['TODO'].borderColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStatus('IN_PROGRESS')}}>
                    <Status content={'IN_PROGRESS'} backgroundColor={Statuses['IN_PROGRESS'].color} borderColor={Statuses['IN_PROGRESS'].borderColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStatus('DONE')}}>
                    <Status content={"DONE"} backgroundColor={Statuses['DONE'].color} borderColor={Statuses['DONE'].borderColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStatus('CANCELED')}}>
                    <Status content={"CANCELED"} backgroundColor={Statuses['CANCELED'].color} borderColor={Statuses['CANCELED'].borderColor}/>
                </TouchableOpacity>
                
            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                
                <TouchableOpacity onPress={()=>{setStatus('IN_REVIEW')}}>
                    <Status content={'IN_REVIEW'} backgroundColor={Statuses['IN_REVIEW'].color} borderColor={Statuses['IN_REVIEW'].borderColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStatus('PENDING')}}>
                    <Status content={"PENDING"} backgroundColor={Statuses['PENDING'].color} borderColor={Statuses['PENDING'].borderColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStatus('IN_TESTING')}}>
                    <Status content={"IN_TESTING"} backgroundColor={Statuses['IN_TESTING'].color} borderColor={Statuses['IN_TESTING'].borderColor}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}