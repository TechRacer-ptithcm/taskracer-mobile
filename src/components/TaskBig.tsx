import { View } from "react-native"
import { BackgroundColor, BlueLight, DisableColor, DisableLightColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, RedLight, WhiteColor } from "../assets/color"
import { Space } from "./Space"
import { Title } from "./Title"
import ClockIcon from "../assets/icons/ClockIcon"


type TaskBigProps = {
    title: string,
    ownerName: string,
    startTime: Date,
    endTime: Date,
    type: boolean,
}

export const TaskBig = ({title, ownerName, startTime, endTime, type} : TaskBigProps)=>{
    const duration = endTime.valueOf() - startTime.valueOf();
    const progressPercent = ((new Date()).valueOf() - startTime.valueOf())*100/duration;
    const remainHours = Math.round((endTime.valueOf() - (new Date()).valueOf())/3600000)
    return (
        <View style = {{width: 240, minHeight: 280, backgroundColor: 'black', borderRadius: 20, overflow: 'hidden'}}>
            <View style = {{flex: 4, backgroundColor: type ? PrimaryColorRed : PrimaryColorBlue, position:'relative'}}>
                <View style = {{flex: 1, position: 'absolute', flexDirection: 'row', transform: [{rotate: '-45deg'}], top: -120}}>
                    <View style = {{width: 80, height: 500, backgroundColor: type ? RedLight : BlueLight}}/>
                    <Space space={24}/>
                    <View style = {{width: 80, height: 500, backgroundColor: type ? RedLight : BlueLight}}/>
                    <Space space={24}/>
                    <View style = {{width: 80, height: 500, backgroundColor: type ? RedLight : BlueLight}}/>
                    <Space space={24}/>
                    <View style = {{width: 80, height: 500, backgroundColor: type ? RedLight : BlueLight}}/>
                    <Space space={24}/>
                </View>
                <View style={{flex: 1,alignItems: 'flex-start', justifyContent: 'flex-end', padding: 18}}>
                    <Title title={title} size={18} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={6}/>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <Title title="Owner: " size={12} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            <Title title={ownerName} size={12} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <ClockIcon width={24} height={24} color={WhiteColor}/>
                            <Space space={6}/>
                            <Title title={(remainHours>=0 ? remainHours.toString() : '0') +"H"} size={12} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {{flex: 1, backgroundColor: BackgroundColor, paddingLeft: 18, paddingRight: 18, paddingTop: 10, justifyContent: 'space-between'}}>
                <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Title title="Complation rate" size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                    <Title title={Math.round(progressPercent).toString() + "%"} size={16} color={GrayColor} type ={true} horizontalPadding={0} verticalPadding={0}/>
                </View>
                <View style = {{width: '100%', backgroundColor: DisableLightColor, height: 5, marginBottom: 18}}>
                    <View style = {{width:`${Math.round(progressPercent)}%`, backgroundColor: type ? PrimaryColorRed: PrimaryColorBlue, height: 5}}/>
                </View>
            </View>
        </View>
    )
}