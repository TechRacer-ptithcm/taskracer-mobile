import { Alert, Text, TouchableOpacity, View } from "react-native"
import { Task } from "../models/Task"
import { Title } from "../components/Title"
import { Space } from "../components/Space"
import { BackgroundColor, GrayColor, GreenColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from "../assets/color"
import { ParamListBase, RouteProp, useNavigation } from "@react-navigation/native"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { AppPadding } from "../constants/spaces"
import BackIcon from "../assets/icons/BackIcon"
import { AvataBaseWord } from "../components/AvataBaseWord"
import CalendarIcon from "../assets/icons/CalendarIcon"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { TaskSmall } from "../components/TaskSmall"
import { useCallback, useEffect, useRef, useState } from "react"
import { getTaskById } from "../services/getTaskById"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import { setLoading } from "../redux/slices/appSlice"
import { loadingSelector } from "../redux/selectors/appSelectors"
import { Loading } from "../components/Loading"
import { useAppDispatch } from "../redux/hooks"
import EditIcon from "../assets/icons/EditIcon"
import { TaskInfoString } from "../constants/screen"
import { AppStackParamList } from "../navigation/AppNavigation"
import { ClockSetTime } from "../components/ClockSetTime"
import { Input } from "../components/Input"
import { ListPriority } from "../sections/ListPriority"
import { Priorities } from "../constants/strings"
import { ListStatus } from "../sections/ListStatus"
import { updateTask } from "../services/updateTask"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"


export type TaskInfoScreenParams = {
    taskId: string,
}

export const TaskInfoScreen = ({route}: { route: RouteProp<AppStackParamList>; navigation: any; }) => {
    console.log(route.params)
    const taskId = route.params?.taskId;
    const accessToken = useSelector(tokenSelector);
    const [originalTaskValue, setOriginalTaskValue] = useState({
        content: '',
        startTime: 0,
        deadline: 0,
        status: 'TODO',
        priority: 'LOW',
        description: "",
    })
    const [task, setTask] = useState<Task|undefined>(undefined);
    const [taskProgress, setTaskProgress] = useState<number>(0);
    const [openClock, setOpenClock] = useState<boolean>(false);
    const [dueTime, setDueTime] = useState<Date>(new Date());
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [clockMode, setClockMode] = useState<'date'|'time'>('time');
    const [typeSettedTime, setTypeSettedTime] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("")
    const [editedTitleMode, setEdittedTitleMode] = useState<boolean>(false);
    const [openExtendStatus, setOpenExtendStatus] = useState<boolean>(false);
    const [status, setStatus] = useState<'TODO'|'IN_PROGRESS'|'DONE'|'CANCELED'|'IN_REVIEW'|'PENDING'|'IN_TESTING'>("TODO");
    const [openExtendPriority, setOpenExtendPriority] = useState<boolean>(false);
    const [priority, setPriority] = useState<'LOW'|'MEDIUM'|'HIGH'>('LOW');
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [description, setDescription] = useState<string>("");
    const [isUpdateDescription, setIsUpdateDescription] = useState<boolean>(false);
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
    const dispatch = useAppDispatch();
    const handleClickUpdate = useCallback(()=>{
        updateTask({id: taskId?taskId:"", accessToken: accessToken, type: task?.type?task.type:"", content: title, priority, description, status, startAt: startTime.toISOString(), dueAt: dueTime.toISOString()})  
            .then(res=>{   
                Alert.alert("Update task successfully!!")
                setIsUpdate(false)
                navigation.goBack()
            })
            .catch(err=>{
                console.log('Update task error with message:', err);
            })
    }, [task, title, startTime, dueTime, priority, status, description])
    useEffect(()=>{
        dispatch(setLoading(true))
        getTaskById({id: taskId, accessToken:accessToken}).then((res)=>{
            let task:Task = res.data
            setTask(task);
            const startAt = new Date(task.startAt).getTime() + 7 * 60 * 60 * 1000;
            const dueAt = new Date(task.dueAt).getTime() + 7 * 60 * 60 * 1000;
            setTaskProgress((new Date().getTime() - startAt)*100/(dueAt - startAt));
            setDueTime(new Date(dueAt));
            setStartTime(new Date(startAt));
            setTitle(task.content);
            setStatus(task.status);
            setPriority(task.priority)
            setDescription(task.description)
            setOriginalTaskValue({
                content: task.content,
                startTime: startAt,
                deadline: dueAt,
                status: task.status,
                priority: task.priority,
                description: task.description,
            })
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            dispatch(setLoading(false));
        })
    }, [])
    useEffect(()=>{
        console.log(originalTaskValue)
        if (
            originalTaskValue.content!=title ||
            originalTaskValue.deadline!=dueTime.getTime() ||
            originalTaskValue.startTime!=startTime.getTime() ||
            originalTaskValue.status!=status ||
            originalTaskValue.priority!=priority ||
            originalTaskValue.description!=description
        ){
            console.log(originalTaskValue.content!=title, originalTaskValue.deadline!=dueTime.getTime(), originalTaskValue.startTime!=startTime.getTime(), originalTaskValue.status!=status, originalTaskValue.priority!=priority, originalTaskValue.description!=description)
            setIsUpdate(true);
        } else {
            setIsUpdate(false);
        }
    }, [title, startTime, dueTime, priority, status, description])
    return (
        <View style = {{flex: 1, backgroundColor: WhiteColor, position: 'relative', paddingTop: AppPadding*3, paddingLeft: AppPadding, paddingRight: AppPadding}}>  
            <OverlayBubbleAnimation/>
            <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={()=>{console.log("ahihi")}}>
                        <BackIcon width={30} height={30} color ={GrayColor}/>
                    </TouchableOpacity>
                    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Title title={"Detail"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                </View>
            <ScrollView style = {{flex: 1}} showsVerticalScrollIndicator={false}>                
                <Space space={AppPadding}/>
                <View style = {{backgroundColor: BackgroundColor, borderRadius: 20, padding: AppPadding}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        {
                            editedTitleMode?
                            <TextInput value={title} onChangeText={(value)=>{setTitle(value)}} style = {{borderBottomWidth: 2, borderColor: GrayColor, flex: 1}}/>:
                            
                            <Title title={title} size={32} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                        }
                        {
                            !editedTitleMode?
                            <TouchableOpacity onPress={()=>{setEdittedTitleMode(true)}}>
                                <EditIcon width={30} height ={30} color ={GrayColor}/>
                            </TouchableOpacity>:
                            <TouchableOpacity onPress={()=>{setEdittedTitleMode(false)}} style ={{backgroundColor: PrimaryColorBlue, padding: 12, borderRadius: 24, paddingTop: 12, paddingBottom: 12}}>
                                <Title title={"Done"} size={12} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            </TouchableOpacity>
                        }
                    </View>
                    <Space space={8}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <AvataBaseWord full_name="ALex Gi" customSize={32}/>
                        <Space space={6}/>
                        <Title title={"Created by"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        <Title title={" Alex Gi"} size={12} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                    <Space space={12}/>
                    {
                        task?.startAt &&
                        <>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <View  style = {{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', }}>
                                        <CalendarIcon width={24} height={24} color={GrayColor}/>
                                        <Space space={6}/>

                                        <Title title={"Start At"} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                                    </View>
                                    <Space space={6}/>
                                    <TouchableOpacity style = {{backgroundColor: PrimaryColorBlue, padding: 8, paddingTop: 8, paddingBottom: 8, borderRadius: 24}} onPress={()=>{
                                        setOpenClock(true)
                                        setClockMode('date')
                                        setTypeSettedTime(true);
                                    }}>
                                        <Title title={startTime.toDateString()} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                                    </TouchableOpacity>
                                    <Space space={8}/>
                                    <TouchableOpacity style = {{backgroundColor: PrimaryColorBlue, padding: 8, paddingTop: 8, paddingBottom: 8, borderRadius: 24}} onPress={()=>{
                                        setOpenClock(true)
                                        setClockMode('time')
                                        setTypeSettedTime(true);

                                    }}>
                                        <Title title={`${startTime.getHours()<10?"0"+startTime.getHours():startTime.getHours()}:${startTime.getMinutes()<10?"0"+startTime.getMinutes():startTime.getMinutes()}`} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Space space={12}/>
                        </>

                    }
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <View  style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', }}>
                                <CalendarIcon width={24} height={24} color={GrayColor}/>
                                <Space space={6}/>

                                <Title title={"Deadline"} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={6}/>
                            <TouchableOpacity style = {{backgroundColor: PrimaryColorRed, padding: 8, paddingTop: 8, paddingBottom: 8, borderRadius: 24}} onPress={()=>{
                                setOpenClock(true)
                                setClockMode('date')
                                setTypeSettedTime(false);

                            }}>
                                <Title title={dueTime.toDateString()} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            </TouchableOpacity>
                            <Space space={8}/>
                            <TouchableOpacity style = {{backgroundColor: PrimaryColorRed, padding: 8, paddingTop: 8, paddingBottom: 8, borderRadius: 24}} onPress={()=>{
                                setOpenClock(true)
                                setTypeSettedTime(false);
                                setClockMode('time')
                            }}>
                                <Title title={`${dueTime.getHours()<10?"0"+dueTime.getHours():dueTime.getHours()}:${dueTime.getMinutes()<10?"0"+dueTime.getMinutes():dueTime.getMinutes()}`} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            </TouchableOpacity>
                        </View>                        
                    </View>
                    <Space space={12}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Title title={"Status"} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        <Space space={8}/>
                        <TouchableOpacity onPress={()=>{setOpenExtendStatus(!openExtendStatus)}} style = {{padding: 8, borderRadius: 24, backgroundColor: PrimaryColorBlue, position:'relative'}}>
                            <Title title={status || ""} size={14} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            {
                                openExtendStatus &&
                                <View style = {{position: 'absolute', top: -114, left: 0}}>
                                    <ListStatus setStatus={setStatus}/>
                                </View>
                            }
                        </TouchableOpacity>
                    </View>
                    <Space space={12}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Title title={"Priority"} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        <Space space={8}/>
                        <TouchableOpacity onPress={()=>{setOpenExtendPriority(!openExtendPriority)}} style = {{padding: 8, borderRadius: 24, backgroundColor: Priorities[priority].color, position:'relative'}}>
                            <Title title={priority || ""} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            {
                                openExtendPriority && 
                                <View style = {{position: 'absolute', top: -70, left: 0}}>
                                    <ListPriority setPriority={setPriority}/>
                                </View>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{backgroundColor: BackgroundColor, borderRadius: 20, padding: AppPadding, marginTop: AppPadding/2}}>
                    <Title title={"Description"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={8}/>
                    <View style ={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        {
                            isUpdateDescription?
                            <TextInput value={description} onChangeText={(value)=>{setDescription(value)}} style = {{borderBottomWidth: 2, borderColor: GrayColor, flex: 1}}/>:
                            
                            <Title title={description || ""} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        }
                        {
                            !isUpdateDescription?
                            <TouchableOpacity onPress={()=>{setIsUpdateDescription(true)}}>
                                <EditIcon width={30} height ={30} color ={GrayColor}/>
                            </TouchableOpacity>:
                            <TouchableOpacity onPress={()=>{setIsUpdateDescription(false)}} style ={{backgroundColor: PrimaryColorBlue, padding: 12, borderRadius: 24, paddingTop: 12, paddingBottom: 12}}>
                                <Title title={"Done"} size={12} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            </TouchableOpacity>
                        }
                    </View>
                    <Space space={24}/>
                    <Title title={"Assignee"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={8}/>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                        </ScrollView>
                    </View>
                    <Space space={24}/>
                    {task?.startAt &&
                    <>
                        <View>
                            <Title title={"Progress"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            <Space space={8}/>
                            <View style = {{height: 8, width: '100%', backgroundColor: GrayColor, borderRadius: 4}}>
                                <View style = {{height: 8, width: `${taskProgress<=100&&taskProgress>=0?Math.round(taskProgress):0}%`, backgroundColor: GreenColor, borderRadius: 4}}>
                                    <View style = {{position: 'absolute', top: 10, right: -14, backgroundColor: GreenColor, borderRadius: 4, padding: 4}}>
                                        <Title title={`${taskProgress<=100&&taskProgress>=0?Math.round(taskProgress):0}%`} size={12} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Space space={24}/>
                    </>
                    }
                    <View>
                        <Title title={"Sub tasks"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                        <Space space={8}/>
                        <View>
                            {/* <TaskSmall title={"Sub task 1"} ownerName="Alex Gi" startTime={new Date()} endTime={new Date()} type={false}/> */}
                            {/* <Space space={8}/> */}
                            {/* <TaskSmall title={"Sub task 2"} ownerName="Alex Gi" startTime={new Date()} endTime={new Date()} type={false}/> */}
                        </View>
                    </View>
                </View>
            </ScrollView>
            {
                openClock &&
                <ClockSetTime
                    time={typeSettedTime?startTime: dueTime}
                    setTime={typeSettedTime?setStartTime: setDueTime}
                    mode={clockMode}
                    setShow={setOpenClock}
                />
            }
            {
                isUpdate &&
                <View style = {{position: 'absolute', bottom: 60, backgroundColor: PrimaryColorBlue, padding: 12, borderRadius: 32, alignSelf: 'center', elevation: 4}}>
                    <TouchableOpacity onPress={handleClickUpdate}>
                        <Title title={"Update"} size={18} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}