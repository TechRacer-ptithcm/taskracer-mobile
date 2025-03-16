import { Dimensions, FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import { AppPadding } from '../constants/spaces';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BackgroundColor, GrayColor, GreenColor, NotificationColor, PrimaryColorBlue, PrimaryColorRed, PurpleColor, WhiteColor } from '../assets/color';
import { Title } from '../components/Title';
import { Space } from '../components/Space';
import UUID from 'react-native-uuid';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { setPomoMode } from '../redux/slices/appSlice';
import { DateComponent } from '../components/Date';
import { dayString } from '../constants/strings';

const {height} = Dimensions.get('window')
export const CalendarScreen = () => {
    const [events, setEvents] = useState([

        {
            id: UUID.v4(),
            title: 'Meeting1',
            start: new Date(2025, 2, 11, 11, 1),
            end: new Date(2025, 2, 11, 13, 30),
            color: GrayColor
        },
        {
            id: UUID.v4(),

            title: 'Meeting5',
            start: new Date(2025, 2, 11, 11, 2),
            end: new Date(2025, 2, 11, 15, 3),
            color: GreenColor
        },
        {
            id: UUID.v4(),

            title: 'Meeting5',
            start: new Date(2025, 2, 11, 11, 3),
            end: new Date(2025, 2, 11, 15, 3),
            color: GreenColor
        },
        {
            id: UUID.v4(),

            title: 'Meeting5',
            start: new Date(2025, 2, 11, 11, 4),
            end: new Date(2025, 2, 11, 15, 3),
            color: GreenColor
        },
        {
            id: UUID.v4(),

            title: 'Meeting5',
            start: new Date(2025, 2, 11, 15, 4),
            end: new Date(2025, 2, 11, 18, 3),
            color: GreenColor
        },
        {
            id: UUID.v4(),

            title: 'Meeting5',
            start: new Date(2025, 2, 11, 15, 4),
            end: new Date(2025, 2, 11, 18, 3),
            color: GreenColor
        },
        {
            id: UUID.v4(),

            title: 'Meeting8: Planning new Things for this company next year',
            start: new Date(2025, 2, 11, 16, 3),
            end: new Date(2025, 2, 11, 20, 3),
            color: GreenColor
        },
    ])
    const [listDate, setListDate] = useState([new Date()])
    useLayoutEffect(()=>{
        let listLeft: Date[] = []
        let listRight: Date[] = []
        let currentDate = new Date();
        for (let i = 0; i<365; i++){
            listLeft.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()-(i+1)));
            listRight.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+(i+1)));
        }
        listLeft = listLeft.reverse()
        setListDate(pre=>{
            return [...listLeft, ...pre, ...listRight];
        })
    }, [])
    const [calendarMode, setCalendarMode] = useState('day')
    const [dateFocused, setDateFocused] = useState(new Date());
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
    const flatListRef = useRef<FlatList>(null);
    const [initialScrollCalendarView, setInitialScrollCalendarView] = useState(362)
    return (
        <View key = {calendarMode} style = {{padding: AppPadding, paddingTop: 32, position: 'relative'}} onLayout={(event)=>{
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
            <View style = {{width: 500, height: 100, justifyContent: 'center'}}>
                <View style = {{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                    <View style = {{marginTop: 6}}>
                        <Title color='#000' size={60} title={(new Date()).getDate().toString()} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                    <View style = {{marginTop: 6, marginLeft: 12}}>
                        <Title color='#000' size={12} title={dayString[(new Date()).getDay()]} type={true} horizontalPadding={0} verticalPadding={0}/>
                        <Title color='#000' size={12} title={((new Date()).getMonth()+1).toString() + '/' + (new Date()).getFullYear().toString()} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                </View>
            </View>
            <Calendar 
                
                date={dateFocused}
                eventCellStyle={{justifyContent: 'center', backgroundColor: 'transparent', width: ((width*0.8)/(maxCount)),  borderRadius: 12, minWidth: 0, margin: 0, position: 'absolute', shadowColor: 'transparent'}}
                hourStyle={{fontFamily: 'DynaPuff-Bold', color: GrayColor}}
                overlapOffset={((width*0.73)/(maxCount))}
                onPressDateHeader={(date:Date)=>{
                    setDateFocused(date);
                    setCalendarMode('3days');
                }}
                renderHeader={()=>{
                    return (
                        <FlatList 
                            style={{paddingBottom: 12}}
                            ref={flatListRef} 
                            initialScrollIndex={initialScrollCalendarView} 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            data={listDate} 
                            getItemLayout={(data, index) => ({
                                length: 80, // Each item width
                                offset: 80 * index, // Offset calculation
                                index,
                            })}
                            onScrollToIndexFailed={(info)=>{
                                flatListRef.current?.scrollToOffset({offset: info.averageItemLength * info.index, animated: true})
                            }}
                            renderItem={({item, index})=>{
                                return (
                                    <DateComponent isFocus={item.getDate() === dateFocused.getDate() && item.getMonth()===dateFocused.getMonth() && item.getFullYear()===dateFocused.getFullYear()} dateValue={item} onClick={()=>{
                                        setDateFocused(item)
                                        setInitialScrollCalendarView(index);
                                    }}/>
                                )
                            
                            }}
                        />
                    )
                }}
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
                swipeEnabled={false}
                events={events} 
                height={height-90} 
                mode={calendarMode || 'day'} 
                showTime={true} 
                hideNowIndicator={false} 
                onPressEvent={(event)=>{console.log(event)}}
            />
        </View>
    );

};
