import { Dimensions, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import { AppPadding } from '../constants/spaces';
import { useState } from 'react';
import { BackgroundColor, GrayColor, GreenColor, NotificationColor, PrimaryColorBlue, PrimaryColorRed, PurpleColor, WhiteColor } from '../assets/color';
import { Title } from '../components/Title';
import { Space } from '../components/Space';
import UUID from 'react-native-uuid';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';

const {height} = Dimensions.get('window')
export const CalendarScreen = () => {
    const [events, setEvents] = useState([

    {
        id: UUID.v4(),
        title: 'Meeting1',
        start: new Date(2025, 2, 7, 11, 1),
        end: new Date(2025, 2, 7, 13, 30),
        color: GrayColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting5',
        start: new Date(2025, 2, 7, 11, 2),
        end: new Date(2025, 2, 7, 15, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting5',
        start: new Date(2025, 2, 7, 11, 3),
        end: new Date(2025, 2, 7, 15, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting5',
        start: new Date(2025, 2, 7, 11, 4),
        end: new Date(2025, 2, 7, 15, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting8: Planning new Things for this company next year',
        start: new Date(2025, 2, 7, 16, 3),
        end: new Date(2025, 2, 7, 20, 3),
        color: GreenColor
    },
    ])
    const [calendarMode, setCalendarMode] = useState('day')
    const [width, setWidth] = useState(0);
    let maxCount: number = 0;
    for (let event of events){
        let count = 0;
        let countMargin = 0;
        let foundEvent = false;
        for (let i = 0; i<events.length; i++){
            if ((event.start<=events[i].end && event.start >= events[i].start) || (event.end<=events[i].end && event.end>=events[i].start) || (event.start<=events[i].start && event.end>=events[i].end)){
                count++;
                if (event.id === events[i].id){foundEvent = true};
                if (!foundEvent){
                    countMargin++;
                }
            }
        }
        if (count>maxCount){
            maxCount = count;
        }
    }
    return (
        <View style = {{padding: AppPadding, paddingTop: 32, position: 'relative'}} onLayout={(event)=>{
                let setValue = event.nativeEvent.layout.width;
                if (calendarMode === '3days'){
                    setValue = event.nativeEvent.layout.width / 3
                } else if (calendarMode === 'week'){
                    setValue = event.nativeEvent.layout.width / 7
                }
                setWidth(setValue)
            }}
        >
            <OverlayBubbleAnimation/>

            <Calendar eventCellStyle={{justifyContent: 'center', backgroundColor: 'transparent', width: ((width*0.8)/(maxCount)),  borderRadius: 12, minWidth: 0, margin: 0, position: 'absolute', shadowColor: 'transparent'}}
            hourStyle={{fontFamily: 'DynaPuff-Bold', color: GrayColor}}
            overlapOffset={((width*0.73)/(maxCount))}
            renderEvent={(event, touchableOpacityProps)=>{
                let eventProps = touchableOpacityProps
                if (calendarMode!=='month'){

                    return (
                        <TouchableOpacity {...eventProps} onPress={()=>{
                        }} key={UUID.v4()}>
                            <View style ={{flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: event.color, borderRadius: 10, position: 'relative', borderWidth: 1, borderColor: WhiteColor}}>
                                <View style = {{height: 10, width: 10, backgroundColor: '#fff', opacity: 0.1, borderRadius: 20, position: 'absolute', top: 5, left: 5}}/>
                                <Title title={event.title} color={WhiteColor} size={8} type={true} horizontalPadding={6} verticalPadding={0}/>
                            </View>
                        </TouchableOpacity>
                    )
                } else{
                    return (
                        <View style={{width: 10, height: 10, borderRadius: 10, backgroundColor: event.color}}></View>
                    )
                }
            }}
            events={events} height={height} mode={calendarMode || 'day'} onPressDateHeader={()=>{}} showTime={true} hideNowIndicator={false} onPressEvent={(event)=>{console.log(event)}}/>
        </View>
    );

};
