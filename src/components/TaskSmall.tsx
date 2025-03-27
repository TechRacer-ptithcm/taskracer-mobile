import { View } from "react-native";
import { Title } from "./Title";
import { BackgroundColor, BlueSuperLight, GrayColor, PrimaryColorBlue, PrimaryColorRed, RedLight, RedSuperLight, WhiteColor } from "../assets/color";
import CircularProgress from "react-native-circular-progress-indicator";
import ClockIcon from "../assets/icons/ClockIcon";
import { Space } from "./Space";
import LateIcon from "../assets/icons/LateIcon";
import RunningIcon from "../assets/icons/RunningIcon";

type TaskSmallProps = {
    title: string,
    ownerName: string,
    startTime: Date,
    endTime: Date,
    type: boolean,
}

export const TaskSmall = ({title, ownerName, startTime, endTime, type} : TaskSmallProps)=>{
    const duration = endTime.valueOf() - startTime.valueOf();
    const progressPercent = ((new Date()).valueOf() - startTime.valueOf())*100/duration;
    const remainHours = Math.round((endTime.valueOf() - (new Date()).valueOf())/3600000)
    return (
        <View style = {{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: BackgroundColor, justifyContent: 'space-between', padding:12, borderRadius: 20}}>
            <View style = {{flexDirection: 'row', alignItems: 'center', flex:1}}>
                <View style = {{width: 60, height: 60, borderRadius:10, backgroundColor:type ? RedSuperLight : BlueSuperLight, padding: 8}}>
                    <View style = {{flexDirection: 'row', flex:1}}>
                        <View style = {{flex:1, aspectRatio:1, backgroundColor: type ? PrimaryColorRed : PrimaryColorBlue, margin:3}}/>
                        <View style = {{flex:1, aspectRatio:1, margin:3, overflow:'hidden', position: 'relative'}}>
                            <View style = {{width: 30, aspectRatio:1, backgroundColor: type ? PrimaryColorRed : PrimaryColorBlue, transform:[{rotate:'30deg'}], position: 'absolute', top:10, bottom: -20, left:-4}}/>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', flex:1}}>
                        <View style = {{flex:1, aspectRatio:1, backgroundColor: type ? PrimaryColorRed : PrimaryColorBlue, margin:3}}/>
                        <View style = {{flex:1, aspectRatio:1, backgroundColor: type ? PrimaryColorRed : PrimaryColorBlue, margin:3}}/>
                    </View>
                </View>
                <Space space={14}/>
                <View style={{justifyContent: 'flex-start'}}>
                    <Title title={title} size={14} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={2}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Title title="Time remaining" size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        <Space space={24}/>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <ClockIcon width={24} height={24} color={GrayColor}/>
                            <Space space={4}/>
                            <Title title={(remainHours>=0 ? remainHours.toString() : '0') +"H"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{}}>
                {
                    progressPercent>=0 && progressPercent<=100 && 
                    <CircularProgress
                        value={progressPercent}
                        radius={20}
                        activeStrokeColor={type ? PrimaryColorRed : PrimaryColorBlue}
                        inActiveStrokeOpacity={0.3}
                        progressValueColor={GrayColor}
                        valueSuffix={'%'}
                        progressValueStyle={{fontFamily: 'DynaPuff-Bold', fontWeight:'regular'}}
                    />                    
                }
                {
                    progressPercent > 100 &&
                    <LateIcon width={24} height={24} color ={GrayColor}/>
                }
                {
                    progressPercent < 0 &&
                    <RunningIcon width={24} height={24} color ={GrayColor}/>
                }
            </View>
        </View>
    )
};