import { Animated, Easing, Text, TextInput, TouchableOpacity, useAnimatedValue, View } from 'react-native';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { useEffect, useRef, useState } from 'react';
import { BackgroundColor, BubbleColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from '../assets/color';
import { FlipInEasyX } from 'react-native-reanimated';
import { Title } from '../components/Title';
import { AppPadding } from '../constants/spaces';
import EditIcon from '../assets/icons/EditIcon';
import { PomoBreakMode, PomoFocusMode, PomoNormalMode } from '../constants/strings';
import { Space } from '../components/Space';
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { Button } from '../components/Button';
import CloseIcon from '../assets/icons/CloseIcon';
import Toast from 'react-native-toast-message';
import { SetPomodoro } from '../components/SetPomodoro';
import { useSelector } from 'react-redux';
import { breakTimeSelector, focusTimeSelector, pomoModeSelector } from '../redux/selectors/appSelectors';
import { useAppDispatch } from '../redux/hooks';
import { setBreakTime, setFocusTime, setPomoMode } from '../redux/slices/appSlice';


export const PomodoroScreen = () => {
    const focusTime = useSelector(focusTimeSelector);
    const breakTime = useSelector(breakTimeSelector);
    const [focusTimeState, setFocusTimeState] = useState([focusTime[0], focusTime[1], focusTime[2], focusTime[3]]);
    const [breakTimeState, setBreakTimeState] = useState([breakTime[0], breakTime[1], breakTime[2], breakTime[3]]);
    const scaleBubble = useRef(new Animated.Value(1)).current;
    const dispatch = useAppDispatch();
    const [startPomo, setStartPomo] = useState(false);
    const [openSetModeCenter, setOpenSetModeCenter] = useState(false);
    const pomoMode = useSelector(pomoModeSelector);
    useEffect(()=>{
        console.log("break time")
    }, [breakTime])
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
        let minuteDozen = pomoMode === PomoFocusMode ? focusTimeState[0] : breakTimeState[0];
        let minuteUnit = pomoMode === PomoFocusMode ? focusTimeState[1] : breakTimeState[1];
        let secondDozen = pomoMode === PomoFocusMode ? focusTimeState[2] : breakTimeState[2];
        let secondUnit = pomoMode === PomoFocusMode ? focusTimeState[3] : breakTimeState[3];

        if (startPomo){
            setTimeout(()=>{
                secondUnit = secondUnit - 1 < 0 ? 9 : secondUnit - 1;
                if (secondUnit === 9 && secondDozen-1 < 0){
                    secondDozen = 5;
                } else if (secondUnit === 9 && secondDozen-1 >=0){
                    secondDozen = secondDozen-1;
                }
                if (secondDozen === 5 && secondUnit === 9 && minuteUnit-1 < 0){
                    minuteUnit = 9;
                } else if (secondDozen === 5 && secondUnit === 9 && minuteUnit-1 >= 0){
                    minuteUnit = minuteUnit-1;
                }
                if (minuteUnit === 9 && secondDozen === 5 && secondUnit === 9 && minuteDozen-1 < 0){
                    dispatch(setPomoMode(pomoMode === PomoFocusMode ? PomoBreakMode : PomoFocusMode));
                    minuteDozen = focusTime[0];
                    minuteUnit = focusTime[1];
                    secondDozen = focusTime[2];
                    secondUnit = focusTime[3];
                } else if (minuteUnit === 9 && secondDozen === 5 && secondUnit === 9 && minuteDozen-1 >= 0){
                    minuteDozen = minuteDozen-1;
                }
                if (pomoMode === PomoFocusMode) {
                    setFocusTimeState([minuteDozen, minuteUnit, secondDozen, secondUnit]);
                } else {
                    setBreakTimeState([minuteDozen, minuteUnit, secondDozen, secondUnit]);
                }
            }, 1000)
        }
    }, [startPomo, focusTime, breakTime, focusTimeState, breakTimeState]);
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
            <Title title={pomoMode===PomoFocusMode ? "Focus" : "Break"} size={32} color={'#000'} type={true} horizontalPadding={0} verticalPadding={0}/>
            <Title title={`${pomoMode === PomoFocusMode ? focusTimeState[0] : breakTimeState[0]}${pomoMode === PomoFocusMode ? focusTimeState[1] : breakTimeState[1]}:${pomoMode === PomoFocusMode ? focusTimeState[2] : breakTimeState[2]}${pomoMode === PomoFocusMode ? focusTimeState[3] : breakTimeState[3]}`} size={100} color={'#000'} type={true} horizontalPadding={0} verticalPadding={0}/>
            <TouchableOpacity onPress={()=>{setStartPomo(preState=>!preState)}} style={{position: 'absolute', bottom: 100, backgroundColor: startPomo ? PrimaryColorRed : PrimaryColorBlue, padding:12, borderRadius:12}}>
                <Title title={startPomo ? 'Stop' : 'Start'} size={32} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
            </TouchableOpacity>
            {openSetModeCenter ? <SetPomodoro setOpenSetModeCenter={setOpenSetModeCenter} setFocusTimeState={setFocusTimeState} setBreakTimeState={setBreakTimeState}/> : <></>}
            <Toast position='bottom'/>
        </View>
    );

};
