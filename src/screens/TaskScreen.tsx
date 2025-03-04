import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TaskBig } from '../components/TaskBig';
import { TaskSmall } from '../components/TaskSmall';
import { OverlayBubbleAnimation } from '../components/OverlayBubbleAnimation';
import { AppPadding } from '../constants/spaces';
import { Title } from '../components/Title';
import { BackgroundColor, GrayColor, PrimaryColorBlue, WhiteColor } from '../assets/color';
import { Space } from '../components/Space';
import BellIcon from '../assets/icons/BellIcon';


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
    const listTask = [{
        title: "Landing page design",
        owner: 'Alex Gi',
        startTime: previousDay,
        endTime: nextDay
    },{
        title: "Landing page design",
        owner: 'Alex Gi',
        startTime: previousDay,
        endTime: nextDay
    },{
        title: "Landing page design",
        owner: 'Alex Gi',
        startTime: previousDay,
        endTime: nextDay
    },{
        title: "Landing page design",
        owner: 'Alex Gi',
        startTime: previousDay,
        endTime: nextDay
    },{
        title: "Landing page design",
        owner: 'Alex Gi',
        startTime: previousDay,
        endTime: nextDay
    }]
    return (
        <View style  ={{position: 'relative', flex:1}}>
            <OverlayBubbleAnimation/>
            <View style = {{}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',padding: AppPadding,  marginTop: 36}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={{uri: 'https://avatars.githubusercontent.com/u/59484967?u=ce3a100108edb093ed79603c9c7f8447aa0bd067&v=4&size=80'}} style={{width: 50, height: 50, borderRadius: 50}}/>
                        <Space space={12}/>
                        <View>
                            <Title title={userName} size={18} color={GrayColor} type={true} horizontalPadding={0} verticalPadding={0}/>
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
                        <Title title='Upcomming Tasks' size={20} color={GrayColor} type={true} horizontalPadding={AppPadding} verticalPadding={12}/>
                        <ScrollView style = {{padding: AppPadding, paddingTop: 0, flexDirection:'row', paddingRight: 0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                listTask.map((task, index: number)=>{
                                    return (
                                        <View key={Math.random()} style = {{marginRight: 12}}>
                                            <TaskBig title={task.title} ownerName={task.owner} startTime={task.startTime} endTime={task.endTime} type={index%2===0}/>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style = {{paddingRight: 0}}>
                        <Space space={16}/>
                        <Title title='My Task List' size={20} color={GrayColor} type={true} horizontalPadding={AppPadding} verticalPadding={12}/>
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
                                    return <View key={Math.random()} style={{paddingBottom: 12}}>
                                            <TaskSmall title={task.title} ownerName={task.owner} startTime={task.startTime} endTime={task.endTime} type={index%2===0}/>
                                        </View>
                                })
                            }
                        </View>
                    </View>
                    <Space space={100}/>
                </ScrollView>
            </View>
        </View>
    );

};
