import { Dimensions, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import { AppPadding } from '../constants/spaces';
import { useState } from 'react';
import { GrayColor, GreenColor, NotificationColor, PrimaryColorBlue, PrimaryColorRed, PurpleColor, WhiteColor } from '../assets/color';
import { Title } from '../components/Title';
import { Space } from '../components/Space';
import UUID from 'react-native-uuid';

const {height} = Dimensions.get('window')
const {width} = Dimensions.get('window')

export const CalendarScreen = () => {
    const [events, setEvents] = useState([
    {
        id: UUID.v4(),
        title: 'Meeting1',
        start: new Date(2025, 2, 7, 10, 1),
        end: new Date(2025, 2, 7, 12, 30),
        color: PurpleColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting2',
        start: new Date(2025, 2, 7, 11, 1),
        end: new Date(2025, 2, 7, 13, 30),
        color: GrayColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting5',
        start: new Date(2025, 2, 7, 11, 3),
        end: new Date(2025, 2, 7, 13, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting5',
        start: new Date(2025, 2, 7, 11, 3),
        end: new Date(2025, 2, 7, 13, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting5',
        start: new Date(2025, 2, 7, 11, 3),
        end: new Date(2025, 2, 7, 13, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting6',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
    {
        id: UUID.v4(),

        title: 'Meeting7',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
     {
        id: UUID.v4(),

        title: 'Meeting7',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
     {
        id: UUID.v4(),

        title: 'Meeting7',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
     {
        id: UUID.v4(),

        title: 'Meeting7',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
     {
        id: UUID.v4(),

        title: 'Meeting7',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
     {
        id: UUID.v4(),

        title: 'Meeting7',
        start: new Date(2025, 2, 7, 15, 3),
        end: new Date(2025, 2, 7, 16, 3),
        color: GreenColor
    },
    
    ])
    const [calendarMode, setCalendarMode] = useState('day');
    return (
        <View style = {{padding: AppPadding, marginTop: 32}}>
            <Calendar eventCellStyle={{justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 20, minWidth: 0, margin: 0, position: 'absolute', shadowColor: 'transparent'}}
            hourStyle={{fontFamily: 'DynaPuff-Bold', color: GrayColor}}
            
            renderEvent={(event, touchableOpacityProps)=>{
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
                const len = (width*80/100)/(count);
                let eventProps = touchableOpacityProps
                return (
                    <TouchableOpacity {...eventProps} onPress={()=>{
                    }} key={UUID.v4()}>
                        <View style ={{marginLeft: len*countMargin, flexDirection: 'row', flex: 1, alignItems: 'center', width: len, backgroundColor: event.color, borderRadius: 14, shadowColor: '#000', shadowRadius: 20, shadowOffset: {width: 0, height: 4}, elevation: 5}}>

                            <Title title={event.title} color={WhiteColor} size={8} type={true} horizontalPadding={12} verticalPadding={0}/>
                        </View>
                    </TouchableOpacity>
                )
            }}
            events={events} height={height} mode={calendarMode || 'day'} onPressDateHeader={()=>{}} showTime={true} hideNowIndicator={false} onPressEvent={(event)=>{console.log(event)}}/>
            <Space space={50}/>
        </View>
    );

};
