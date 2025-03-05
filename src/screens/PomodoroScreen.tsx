import { Animated, Easing, Text, TextInput, TouchableOpacity, useAnimatedValue, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { useEffect, useRef, useState } from 'react';
import { BackgroundColor, BubbleColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from '../assets/color';
import { FlipInEasyX } from 'react-native-reanimated';
import { Title } from '../components/Title';
import { AppPadding } from '../constants/spaces';
import EditIcon from '../assets/icons/EditIcon';
import { PomoNormalMode } from '../constants/strings';
import { Space } from '../components/Space';
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { Button } from '../components/Button';
import CloseIcon from '../assets/icons/CloseIcon';
import Toast from 'react-native-toast-message';


export const PomodoroScreen = () => {
    const scaleBubble = useRef(new Animated.Value(1)).current;
    const [minuteDozen, setMinuteDozen] = useState(1);
    const [minuteUnit, setMinuteUnit] = useState(0);
    const [secondeDozen, setSecondeDozen] = useState(0);
    const [secondeUnit, setSecondeUnit] = useState(0);
    const [startPomo, setStartPomo] = useState(false);
    const [openSetModeCenter, setOpenSetModeCenter] = useState(false);
    const [mode, setMode] = useState(PomoNormalMode);
    useEffect(()=>{
        const animation = Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleBubble, {
                            toValue: 2,
                            duration: 5000,
                            easing: Easing.bounce,
                            useNativeDriver: true,
                    }),
                    Animated.timing(scaleBubble, {
                            toValue: 1,
                            easing: Easing.bounce,
                            duration: 5000,
                            useNativeDriver: true,
                    }),
                    
                ])
            )
        if (startPomo){
            animation.start();
        } else{
            animation.stop();
        }
    }, [startPomo])
    useEffect(()=>{
        if (startPomo){
            setTimeout(()=>{
                setSecondeUnit(preState=>{
                    if (preState===0){
                        return 9;
                    }
                    return --preState
                })
                if (secondeUnit === 0){
                    setSecondeDozen(preState=>{
                        if (preState===0){
                            return 5;
                        }
                        return --preState
                    })
                }
                if (secondeDozen === 0 && secondeUnit === 0){
                    setMinuteUnit(preState=>{
                        if (preState===0){
                            return 9;
                        }
                        return --preState
                    })
                }
                if (minuteUnit === 0 && secondeDozen ===0 && secondeUnit === 0){
                    setMinuteDozen(preState=>{
                        if (preState===0){
                            setStartPomo(false);
                            return 0;
                        }
                        return --preState
                    })
                }
            }, 1000)
        }
    }, [startPomo, secondeUnit])
    return (
        <View style = {{flex: 1, position: 'relative', justifyContent:'center', alignItems:'center'}}>
            <View style = {{flexDirection:'row', position: 'absolute', top:80, justifyContent: 'space-between', width: '100%', paddingLeft: AppPadding, alignItems: 'center', paddingRight: AppPadding}}>
                <Title title='Pomodoro' size={48} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                <TouchableOpacity onPress={()=>{
                    if (!startPomo){
                        setOpenSetModeCenter(true)

                    } else{
                        console.log("ahihi")
                        Toast.show({
                            type: 'info',
                            text1: 'Pomodoro is running!'
                        })
                    }
                }}>
                    <EditIcon width={32} height={32} color={GrayColor}/>
                </TouchableOpacity>
            </View>
            <View style={{top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', position:'absolute'}}>
                <Animated.View style = {{width: 320, height:320, transform:[{scale: scaleBubble}], borderRadius: 500, backgroundColor: BubbleColor}}/>
            </View>
            <Title title={`${minuteDozen}${minuteUnit}:${secondeDozen}${secondeUnit}`} size={100} color={'#000'} type={true} horizontalPadding={0} verticalPadding={0}/>
            <TouchableOpacity onPress={()=>{setStartPomo(preState=>!preState)}} style={{position: 'absolute', bottom: 100, backgroundColor: startPomo ? PrimaryColorRed : PrimaryColorBlue, padding:12, borderRadius:12}}>
                <Title title={startPomo ? 'Stop' : 'Start'} size={32} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
            </TouchableOpacity>
            {/* {openSetModeCenter ? <>
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
                                selectedIndex={minuteDozen}
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
                                selectedIndex={minuteUnit}
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
                                selectedIndex={secondeDozen}
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
                                selectedIndex={secondeUnit}
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
                                selectedIndex={0}
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
                                selectedIndex={0}
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
                                selectedIndex={0}
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
                                selectedIndex={0}
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
                            setMinuteDozen(parseInt(minuteDozenFocus));
                            setMinuteUnit(parseInt(minuteUnitFocus));
                            setSecondeDozen(parseInt(secondeDozenFocus));
                            setSecondeUnit(parseInt(secondeUnitFocus));
                            setOpenSetModeCenter(false);
                        }}/>
                    </View>
                </View>
            </View>
            </>: <></>} */}
            <Toast position='bottom'/>
            
        </View>
    );

};
