import { Text, TouchableOpacity, View } from "react-native"
import { Task } from "../models/Task"
import { Title } from "../components/Title"
import { Space } from "../components/Space"
import { BackgroundColor, GrayColor, GreenColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from "../assets/color"
import { RouteProp } from "@react-navigation/native"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { AppPadding } from "../constants/spaces"
import BackIcon from "../assets/icons/BackIcon"
import { AvataBaseWord } from "../components/AvataBaseWord"
import CalendarIcon from "../assets/icons/CalendarIcon"
import { ScrollView } from "react-native-gesture-handler"
import { TaskSmall } from "../components/TaskSmall"
import { useEffect, useState } from "react"
import { getTaskById } from "../services/getTaskById"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import { setLoading } from "../redux/slices/appSlice"


type TaskInfoScreenParams = {
    taskId: string,
}
type RootStackParamList = {
    TaskInfo: TaskInfoScreenParams;
};

type TaskInfoScreenRouteProp = RouteProp<RootStackParamList, "TaskInfo">;
export const TaskInfoScreen = ({route}: {route: TaskInfoScreenRouteProp}) => {
    const {taskId} = route.params;
    const accessToken = useSelector(tokenSelector);
    const [task, setTask] = useState<Task>({} as Task);
    const [taskProgress, setTaskProgress] = useState<number>(0);
    useEffect(()=>{
        setLoading(true);
        getTaskById({id: taskId, accessToken:accessToken}).then((res)=>{
            const data = res.data;
            setTask(data); 
            const startAt = new Date(data.startAt).getTime() + 7 * 60 * 60 * 1000;
            const dueAt = new Date(data.dueAt).getTime() + 7 * 60 * 60 * 1000;
            setTaskProgress((new Date().getTime() - startAt)*100/(dueAt - startAt));
            console.log(`Task progress: ${taskProgress}%`);
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setLoading(false)
        })
    }, [])
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
                    <Title title={task?.content || ""} size={32} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={8}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <AvataBaseWord full_name="ALex Gi" customSize={32}/>
                        <Space space={6}/>
                        <Title title={"Created by"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        <Title title={" Alex Gi"} size={12} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    </View>
                    <Space space={12}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', backgroundColor: PrimaryColorRed, padding: 8, paddingTop: 8, paddingBottom: 8, borderRadius: 24}}>
                            <CalendarIcon width={24} height={24} color={WhiteColor}/>
                            <Space space={6}/>
                            <Title title={"Due date"} size={14} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            <Space space={6}/>
                            <Title title={task?.dueAt ? new Date(task.dueAt).toDateString() : ""} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                        <Space space={12}/>
                        <View style = {{padding: 8, borderRadius: 24, backgroundColor: PrimaryColorBlue}}>
                            <Title title={task?.status || ""} size={14} color={WhiteColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                    </View>
                    <Space space={12}/>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Title title={"Priority"} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                        <Space space={8}/>
                        <View style = {{padding: 8, borderRadius: 24, backgroundColor: GreenColor}}>
                            <Title title={task?.priority || ""} size={14} color={WhiteColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                        </View>
                    </View>
                </View>
                <View style = {{backgroundColor: BackgroundColor, borderRadius: 20, padding: AppPadding, marginTop: AppPadding/2}}>
                    <Title title={"Description"} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Space space={8}/>
                    <Title title={task?.description || ""} size={14} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
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
                            {/* <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                            <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                            <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                            <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                            <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/>
                            <View style = {{alignItems: 'center', alignSelf: 'baseline'}}>
                                <AvataBaseWord full_name="Alex Gi" customSize={48}/>
                                <Space space={4}/>
                                <Title title={"Alex Gi"} size={12} color={GrayColor} type={false} horizontalPadding={0} verticalPadding={0}/>
                            </View>
                            <Space space={12}/> */}
                            
                        </ScrollView>
                    </View>
                    <Space space={24}/>
                    {task.startAt &&
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
                            <TaskSmall title={"Sub task 1"} ownerName="Alex Gi" startTime={new Date()} endTime={new Date()} type={false}/>
                            <Space space={8}/>
                            <TaskSmall title={"Sub task 2"} ownerName="Alex Gi" startTime={new Date()} endTime={new Date()} type={false}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}