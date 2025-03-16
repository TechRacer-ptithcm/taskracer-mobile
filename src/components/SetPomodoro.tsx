import { TouchableOpacity, View } from "react-native";
import { GrayColor, PrimaryColorBlue, WhiteColor } from "../assets/color";
import CloseIcon from "../assets/icons/CloseIcon";
import { Title } from "./Title";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { useState } from "react";
import { Space } from "./Space";
import { Button } from "./Button";
import { setBreakTime, setFocusTime } from "../redux/slices/appSlice";
import { useAppDispatch } from "../redux/hooks";
import { useSelector } from "react-redux";
import { breakTimeSelector, focusTimeSelector } from "../redux/selectors/appSelectors";


type SetPomodoroProps = {
    setOpenSetModeCenter: React.Dispatch<React.SetStateAction<boolean>>,
}

export const SetPomodoro = ({setOpenSetModeCenter} : SetPomodoroProps)=>{
    const focusTime = useSelector(focusTimeSelector);
    const [minuteDozenFocus, setMinuteDozenFocus] = useState(focusTime[0]);
    const [minuteUnitFocus, setMinuteUnitFocus] = useState(focusTime[1]);
    const [secondeDozenFocus, setSecondeDozenFocus] = useState(focusTime[2]);
    const [secondeUnitFocus, setSecondeUnitFocus] = useState(focusTime[3]);
    const dispatch = useAppDispatch();
    const breakTime = useSelector(breakTimeSelector);
    const [minuteDozenBreak, setMinuteDozenBreak] = useState(breakTime[0]);
    const [minuteUnitBreak, setMinuteUnitBreak] = useState(breakTime[1]);
    const [secondeDozenBreak, setSecondeDozenBreak] = useState(breakTime[2]);
    const [secondeUnitBreak, setSecondeUnitBreak] = useState(breakTime[3]);
    return (
        <View style = {{position: 'absolute' , top: 0, bottom: 0, left: 0, right: 0}}>
            <View style = {{position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222', opacity:0.5, top: 0, bottom: 0, left: 0, right: 0}}/>
            <View style = {{position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, left: 0, right: 0}}>
                <View style = {{minWidth: 400, minHeight: 300, backgroundColor: WhiteColor, borderRadius: 20, padding:20}}>
                    <TouchableOpacity style = {{alignSelf: 'flex-end'}} onPress={()=>{
                        setOpenSetModeCenter(false);
                    }}>
                        <CloseIcon width={32} height={32} color={GrayColor}/>
                    </TouchableOpacity>
                    <Title title='Focus' size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={10}/>
                    <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={minuteDozenFocus}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setMinuteDozenFocus(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                        <Space space={4}/>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={minuteUnitFocus}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setMinuteUnitFocus(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                        <Title title=' : ' size={48} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={secondeDozenFocus}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setSecondeDozenFocus(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                        <Space space={4}/>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={secondeUnitFocus}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setSecondeUnitFocus(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                    </View>
                    <Space space={32}/>
                    <Title title='Break' size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={10}/>
                    <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={minuteDozenBreak}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setMinuteDozenBreak(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                        <Space space={4}/>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={minuteUnitBreak}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setMinuteUnitBreak(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                        <Title title=' : ' size={48} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={secondeDozenBreak}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setSecondeDozenBreak(data || 0);
                                }}
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                        <Space space={4}/>
                        <View style = {{flex: 1, height: 80}}>
                            <ScrollPicker
                                dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                selectedIndex={secondeUnitBreak}
                                // renderItem={(data, index) => {
                                // //
                                // }}
                                onValueChange={(data, selectedIndex) => {
                                    setSecondeUnitBreak(data || 0);
                                }}
                                
                                wrapperHeight={80}
                                wrapperBackground="#FFFFFF"
                                itemHeight={80}
                                highlightColor="#d8d8d8"
                                highlightBorderWidth={2}
                                itemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                                activeItemTextStyle={{color: GrayColor, fontSize: 40, fontFamily: 'DynaPuff-Bold'}}
                            />
                        </View>
                    </View>
                    <Space space={24}/>
                    <View style={{marginTop: 12, marginBottom: 12}}>

                        <Button title='Set Pomodoro' color={PrimaryColorBlue} fullWidth={false} disable={false} onClick={()=>{
                            console.log("ahih")
                            setOpenSetModeCenter(false);
                            dispatch(setFocusTime([minuteDozenFocus, minuteUnitFocus, secondeDozenFocus, secondeUnitFocus]));
                            dispatch(setBreakTime([minuteDozenBreak, minuteUnitBreak, secondeDozenBreak, secondeUnitBreak]))
                        }}/>
                    </View>
                </View>
            </View>
        </View>
    )
}