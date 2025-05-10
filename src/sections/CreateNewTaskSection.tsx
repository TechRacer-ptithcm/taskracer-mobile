import React, { useEffect, useState } from "react"
import { Alert, Animated, Easing, Text, TouchableOpacity, useAnimatedValue, View } from "react-native"
import { BackgroundColor, BubbleColor, GrayColor, GreenColor, PrimaryColorBlue, PrimaryColorRed, RedLight, WarningColor, WhiteColor } from "../assets/color"
import { Title } from "../components/Title"
import { Input } from "../components/Input"
import { InputNormal, listPriority, Priorities, Statuses } from "../constants/strings"
import CalendarColourIcon from "../assets/icons/CalendarColourIcon"
import ClockSolid from "../assets/icons/ClockSolid"
import { Space } from "../components/Space"
import { MultipleLinesInput } from "../components/MultipleLineInput"
import { AvataBaseWord } from "../components/AvataBaseWord"
import { Button } from "../components/Button"
import { InputAndButtonSubmit } from "./InputAndButtonSubmit"
import { ScrollView } from "react-native-gesture-handler"
import { Priority } from "../components/Priority"
import { EnumPriority } from "../constants/enums"
import { ListPriority } from "./ListPriority"
import { createTask } from "../services/createTask"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import { ClockSetTime } from "../components/ClockSetTime"
import { ListStatus } from "./ListStatus"
import { Status } from "../components/Status"
import CloseIcon from "../assets/icons/CloseIcon"
import { Task } from "../models/Task"
import { GetAllTasksData } from "../services/getAllTasks"



type CreateNewTaskSectionParams ={
    openStatus: 'TODO'|'TASK'|'CLOSED'|'OPENED';
    setOpenStatus: React.Dispatch<React.SetStateAction<'TODO'|'TASK'|'CLOSED'|'OPENED'>>;
    parent?:string
    setCurrentListTask: React.Dispatch<React.SetStateAction<GetAllTasksData[]>>;
    currentListTask: GetAllTasksData[];
}

export const CreateNewTaskSection = ({openStatus, setOpenStatus, parent, setCurrentListTask, currentListTask}: CreateNewTaskSectionParams)=>{
    const translateSectionValue: Animated.Value = useAnimatedValue(1000);
    const [title, setTitle] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [listAssign, setListAssign] = useState(['Phung Xuan Giap']);
    const [timeMode, setTimeMode]  =useState<'start'|'end'>('start');
    const [open, setOpen] = useState(false);
    const [clockMode, setClockMode] = useState<'date'|'time'>('date')
    const [assignFrValue, setAssignFrValue] = useState('');
    const [showAssign, setShowAssign] = useState(false);
    const [showPriority, setShowPriority] = useState(false);
    const [priority, setPriority] = useState<'LOW'|'MEDIUM'|'HIGH'>('MEDIUM');
    const [showStatus, setShowStatus] = useState<boolean>(false);
    const [status, setStatus] = useState<'TODO'|'IN_PROGRESS'|'DONE'|'CANCELED'|'IN_REVIEW'|'PENDING'|'IN_TESTING'>('TODO');
    const accessToken = useSelector(tokenSelector);

    const handleCreateAction = async ()=>{
        if (startDate>=endDate){
            Alert.alert("Start time cannot higher than or equal to due time");
        } else if ( title=="") {
            Alert.alert("Title cannot be blank");
        } else if (description==""){
            Alert.alert("Description cannot be blank");
        } else{
            return await createTask({accessToken, parent: parent?parent:null ,type: 'USER', content: title, priority: priority, description, status: status, startAt: openStatus=="TASK"?startDate.toISOString(): undefined, dueAt: endDate.toISOString(), taskType: openStatus})
                .then(res=>{
                    console.log(res.data.content);
                    setOpenStatus('CLOSED');
                    setCurrentListTask([...currentListTask, res.data])
                })
                .catch(error=>{
                    console.log("Create task error with message:", error);
                    setOpenStatus('CLOSED');
                })
        }
    }
    useEffect(()=>{
            Animated.timing(
                translateSectionValue, 
                {
                    toValue: 0,
                    duration: 400,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }
            ).start()
    }, [openStatus])
    return (
        <Animated.View style = {{
            transform: [{translateY: translateSectionValue}], 
            backgroundColor: WhiteColor, 
            flex: 1,
            bottom: 0, 
            position: 'absolute',
            top: 0,
            left: 0, 
            right: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84, 
            padding: 36,
            paddingBottom: 0,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Title title={openStatus=="TASK"?"New Task": "New Todo"} color={GrayColor} size={36} type={true} horizontalPadding={0} verticalPadding={24} center={false}/>
                    <TouchableOpacity onPress={()=>{
                        setOpenStatus('CLOSED')
                    }}>
                        <CloseIcon width={30} height={30} color={PrimaryColorRed}/>

                    </TouchableOpacity>
                </View>
                <View style = {{marginTop: 36}}>
                    <Input type={InputNormal} placeholder={openStatus=="TASK"?"Task title": "Todo title"} value={title} onChangeText={setTitle}/>
                    <MultipleLinesInput placeholder={openStatus=="TASK"?"Task description": "Todo description"} onChangeText={setDescription} value={description}/>
                    {
                        <View style = {{flexDirection: 'row', alignItems:'center', padding: 12, marginTop: 16, justifyContent: 'space-between'}}>
                            <View style = {{padding: 16, borderRadius: 12, backgroundColor: BackgroundColor, elevation: 6, flexDirection: 'row', alignItems: 'center'}}>
                                <CalendarColourIcon width={24} height={24} color={PrimaryColorRed}/>
                                <Space space={12}/>
                                <Title title='Start At: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>

                            </View>
                            <View style = {{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>

                                <TouchableOpacity style = {{}} onPress={()=>{
                                    setOpen(true);
                                    setClockMode('date');
                                    setTimeMode('start');
                                }}>
                                    <Title title={`${startDate.getDate()}/${startDate.getMonth()+1}/${startDate.getFullYear()}`} size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>

                                </TouchableOpacity>
                                <Space space={12}/>
                                <TouchableOpacity style = {{}} onPress={()=>{
                                    setOpen(true);
                                    setClockMode('time');
                                    setTimeMode('start');
                                }}>
                                    <Title title={`${startDate.getHours()<10? '0'+ startDate.getHours().toString() : startDate.getHours()}:${startDate.getMinutes()<10? '0'+ startDate.getMinutes().toString() : startDate.getMinutes()}`} size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    <View style = {{flexDirection: 'row', alignItems:'center', padding: 12, marginTop: 16, justifyContent: 'space-between'}}>
                        <View style = {{padding: 16, borderRadius: 12, backgroundColor: BackgroundColor, elevation: 6, flexDirection: 'row', alignItems: 'center'}}>
                            <ClockSolid width={24} height={24} color={GreenColor}/>
                            <Space space={12}/>
                            <Title title='Due To: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                        </View>
                        <View style = {{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity style = {{}} onPress={()=>{
                                setOpen(true);
                                setClockMode('date');
                                setTimeMode("end");
                            }}>
                                <Title title={`${endDate.getDate()}/${endDate.getMonth()+1}/${endDate.getFullYear()}`} size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                            </TouchableOpacity>
                            <Space space={12}/>
                            <TouchableOpacity onPress={()=>{
                                setOpen(true);
                                setClockMode('time');
                                setTimeMode("end");
                            }}>
                                <Title title={`${endDate.getHours()<10? '0'+ endDate.getHours().toString() : endDate.getHours()}:${endDate.getMinutes()<10? '0'+ endDate.getMinutes().toString() : endDate.getMinutes()}`} size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', width: '100%', alignItems:'center', marginTop: 16, justifyContent: 'space-between', position: 'relative'}}>
                        <Title title='Priority: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                        <TouchableOpacity style = {{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}} onPress={()=>{
                            setShowPriority(!showPriority);
                        }}>
                            <Priority content={priority} backgroundColor={Priorities[priority].color} borderColor={Priorities[priority].borderColor}/>
                        </TouchableOpacity>
                        {
                            showPriority &&
                            <View style = {{position: 'absolute', top: -70, right: 0}}>
                                <ListPriority setPriority={setPriority}/>
                            </View>
                        }
                    </View>
                    <View style = {{flexDirection: 'row', width: '100%', alignItems:'center', marginTop: 16, justifyContent: 'space-between', position: 'relative'}}>
                        <Title title='Status: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                        <TouchableOpacity style = {{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}} onPress={()=>{
                            setShowStatus(!showStatus);
                        }}>
                            <Status content={status} backgroundColor={Statuses[status].color} borderColor={Statuses[status].borderColor}/>
                        </TouchableOpacity>
                        {
                            showStatus &&
                            <View style = {{position: 'absolute', top: -114, right: 0}}>
                                <ListStatus setStatus={setStatus}/>
                            </View>
                        }
                    </View>
                    {/* <View style = {{flexDirection: 'row', width: '100%', alignItems:'center', marginTop: 16, justifyContent: 'space-between', position: 'relative'}}>
                        <Title title='Assign To: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                        <TouchableOpacity style = {{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}} onPress={()=>{
                            setShowAssign(!showAssign);
                        }}>
                            {
                                listAssign.map((user, index)=>{
                                    return (
                                        <View key={index} style = {{transform: [{translateX: 10}]}}>
                                            <AvataBaseWord full_name={user} customSize={28}/>
                                        </View>
                                    )
                                })
                            }
                            <View style = {{width: 28, height: 28, borderRadius: 28, backgroundColor: BackgroundColor, borderWidth: 1, borderColor: PrimaryColorBlue, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style = {{fontWeight: 800, color: PrimaryColorBlue}}>+</Text>
                            </View>
                        </TouchableOpacity>
                        {
                            showAssign &&
                            <InputAndButtonSubmit placeholder="Your coworker email" valueInput={assignFrValue} onValueChange={setAssignFrValue} onSubmit={()=>{}}/>
                        }
                    </View> */}
                    <Space space={60}/>
                </View>
                <View style = {{width: "30%", alignSelf: 'center'}}>
                    <Button title="Create" color={PrimaryColorBlue} fullWidth={false} disable={false} onClick={()=>{handleCreateAction()}}/>
                </View>
                <Space space={100}/>
            </ScrollView>
            {
                open &&
                <ClockSetTime 
                    time={timeMode === 'start'? startDate : endDate} 
                    setTime={timeMode === 'start'? setStartDate : setEndDate} 
                    mode={clockMode} 
                    setShow={setOpen}
                /> 
            }
        </Animated.View>
    )
}