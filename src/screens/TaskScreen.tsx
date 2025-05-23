import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TaskBig } from '../components/TaskBig';
import { TaskSmall } from '../components/TaskSmall';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { AppPadding } from '../constants/spaces';
import { Title } from '../components/Title';
import { BackgroundColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from '../assets/color';
import { Space } from '../components/Space';
import BellIcon from '../assets/icons/BellIcon';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getAllTasks, GetAllTasksData } from '../services/getAllTasks';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../redux/selectors/authSelectors';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CreateNewTaskSection } from '../sections/CreateNewTaskSection';
import { Input } from '../components/Input';
import { InputNormal } from '../constants/strings';
import { Task } from '../models/Task';
import { TaskInfoString, TaskStackString } from '../constants/screen';
import { useAppDispatch } from '../redux/hooks';
import { setLoading } from '../redux/slices/appSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigation/AppNavigation';
import { PopUpAddButton } from '../components/PopUpAddButton';
import { refresh } from '../services/refresh';
import { setToken } from '../redux/slices/authSlice';
import { AvataBaseWord } from '../components/AvataBaseWord';
import { getUserInfo, GetUserInfoData } from '../services/getUserInfo';



type TaskScreenProps = {
    userName: string,
    avata: string,
}

export const TaskScreen = ({userName, avata}: TaskScreenProps) => {
    userName = "Alex Gi";
    var currentHour = (new Date()).getHours()
    var nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 3);
    var previousDay = new Date();
    previousDay.setDate(previousDay.getDate() - 9);
    const [user, setUser] = useState<GetUserInfoData|undefined>(undefined)
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
    const accessToken = useSelector(tokenSelector);
    const [listTask, setListTask] = useState<GetAllTasksData[]>([]);
    const [listTodo, setListTodo] = useState<GetAllTasksData[]>([]);
    const taskMap = useRef(new Map()).current;
    const [create, setCreate] = useState<"TODO"|"TASK"|"CLOSED"|"OPENED">('CLOSED');
    const [showTaskInfo, setShowTaskInfo] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        console.log(accessToken);
    }, [accessToken])

    const handleClickTask = (taskId: string)=>{
        navigation.navigate(TaskInfoString, {taskId: taskId, listSubTasks: taskMap.get(taskId), taskMap: taskMap});
    }
    useEffect(()=>{
        getUserInfo({token: accessToken})
            .then(res=>{
                setUser(res.data.data)
            })
            .catch(error=>{
                console.log("Get user error with message:", error)
            })
    }, [])

    useFocusEffect(
        useCallback(()=>{
            dispatch(setLoading(true));
            getAllTasks({accessToken})
                .then((res)=>{
                    const listTask: GetAllTasksData[]=[];
                    const listTodo: GetAllTasksData[]=[];
                    res.data.forEach((task: GetAllTasksData)=>{
                        if(task.startAt){
                            listTask.push(task);
                        }
                        else {
                            listTodo.push(task);
                        }
                    });
                    res.data.forEach((item, index)=>{
                        if (item.parent === null){
                            taskMap.set(item.id, []);
                        } else if (taskMap.get(item.parent)){
                            taskMap.set(item.parent, [...taskMap.get(item.parent), item])
                        } else {
                            taskMap.set(item.parent, item)
                        }
                    })
                    console.log(taskMap.keys)
                    for (let [key, value] of taskMap) {
                        console.log(`${key} = ${value}`);
                      }
                    setListTask(listTask.filter(item=>item.parent===null));
                    setListTodo(listTodo.filter(item=>item.parent===null));
                })
                .catch((err)=>{
                    console.log("Get all tasks error: ", err);
                })
                .finally(()=>{
                    dispatch(setLoading(false));
                })
        }, [accessToken])
    )
    return (
        <View style  ={{position: 'relative', flex:1, bottom: 0, backgroundColor: 'blue', justifyContent: 'flex-end'}}>
            {/* <View style ={{position: 'relative', backgroundColor: 'red', flex: 1}}>
                <Text>ahihi</Text>
                <Input value='' placeholder='' type={InputNormal} onChangeText={()=>{}}/>
            </View> */}
            <OverlayBubbleAnimation/>
            <View style = {{position: 'relative', flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',padding: AppPadding,  marginTop: 36}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AvataBaseWord full_name={user?.name?user.name: "Anonimous"} customSize={50}/>
                        <Space space={12}/>
                        <View>
                            <Title title={user?.username?user.username: "Anonimous"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                            <Title title={currentHour<12 ? 'Good morning' : 'Good night'} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>{}}>
                        <BellIcon width={28} height={28} color={GrayColor}/>
                    </TouchableOpacity>
                </View>
                <ScrollView scrollEnabled={true} style={{marginTop: -12}}>
                    <View style = {{paddingRight: 0}}>
                        <Space space={16}/>
                        <Title title='Upcomming Todo' size={20} color={GrayColor} type={true} horizontalPadding={AppPadding} verticalPadding={12}/>
                        <ScrollView style = {{padding: AppPadding, paddingTop: 0, flexDirection:'row', paddingRight: 0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                listTodo.map((task, index: number)=>{
                                    return (
                                        <View key={Math.random()} style = {{marginRight: 12}}>
                                            <TaskBig title={task.content} ownerName={task.owner} startTime={new Date(task.startAt)} endTime={new Date(task.dueAt)} type={index%2===0} onClick={() => {handleClickTask(task.id)}}/>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style = {{paddingRight: 0}}>
                        <Space space={16}/>
                        <Title title='My Tasks' size={20} color={GrayColor} type={true} horizontalPadding={AppPadding} verticalPadding={12}/>
                        <ScrollView horizontal={true} style = {{paddingLeft: AppPadding, paddingRight: AppPadding, paddingBottom: AppPadding/2}} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{paddingLeft:16, paddingRight: 16, paddingTop:8, paddingBottom: 8, backgroundColor: PrimaryColorBlue, borderRadius: 12}}>
                                <Title title='Today' size={16} color={WhiteColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                            </TouchableOpacity>
                            <Space space={12}/>
                            <TouchableOpacity style={{paddingLeft:16, paddingRight: 16, paddingTop:8, paddingBottom: 8, backgroundColor: BackgroundColor, borderRadius: 12}}>
                                <Title title='Due Soon' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                            </TouchableOpacity>
                            <Space space={12}/>
                            <TouchableOpacity style={{paddingLeft:16, paddingRight: 16, paddingTop:8, paddingBottom: 8, backgroundColor: BackgroundColor, borderRadius: 12}}>
                                <Title title='Completed' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                            </TouchableOpacity>
                            <Space space={12}/>
                            <TouchableOpacity style={{paddingLeft:16, paddingRight: 16, paddingTop:8, paddingBottom: 8, backgroundColor: BackgroundColor, borderRadius: 12}}>
                                <Title title='Canceled' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                            </TouchableOpacity>
                            <Space space={12}/>

                        </ScrollView>
                        <View style = {{padding: AppPadding, paddingTop: 0}}>
                            {
                                listTask.map((task, index: number)=>{
                                    return (
                                        <View key={Math.random()} style={{paddingBottom: 12}}>
                                            <TaskSmall title={task.content} ownerName={task.owner} startTime={task.startAt} endTime={task.dueAt} type={index%2===0} onClick={() => handleClickTask(task.id)}/>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
            {
                (create=='TODO' || create=='TASK') &&
                <CreateNewTaskSection openStatus={create} setOpenStatus = {setCreate} setCurrentListTask={create==="TODO"?setListTodo:setListTask} currentListTask={create==='TODO'?listTodo:listTask}/>
            }
            {
                create!=="TASK" && create!=="TODO" &&

                <View style = {{position: 'absolute', bottom: 10, backgroundColor: create=='CLOSED'? PrimaryColorBlue: PrimaryColorRed, width: 60, height: 60, borderRadius: 100, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', elevation: 4}}>
                    {
                        create=="OPENED" &&
                        <View style = {{position: 'absolute', top: -60}}>
                            <PopUpAddButton onClick={setCreate}/>
                        </View>
                    }
                    <TouchableOpacity onPress={()=>{create=="CLOSED"? setCreate('OPENED'): setCreate('CLOSED')}}>
                        <Title size={40} color={WhiteColor} title={create=='CLOSED'?'+':'x'} type={false} horizontalPadding={0} verticalPadding={0} center={true}/>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
};
