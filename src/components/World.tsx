import { ScrollView, Text, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor, GreenColor, NotificationColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from "../assets/color"
import { AppPadding } from "../constants/spaces"
import { Space } from "./Space"
import { UserTopWorld } from "./UserTopWorld"
import { BronzeII, SilverI } from "../constants/rank"
import { LinearGradient } from "expo-linear-gradient"
import { TopRankElement } from "./TopRankElement"
const listUserTopRank = [
    {
        top: 1,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
    {
        top: 2,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
    {
        top: 3,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
    {
        top: 4,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
    {
        top: 5,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
    {
        top: 6,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
    {
        top: 7,
        avata: "string",
        name: 'Meo Meo',
        timeMilisecond: 123, 
    },
]

export const World = ()=>{
    return (
        <View style = {{marginLeft: AppPadding, marginRight: AppPadding}}>
            <View style = {{flexDirection: 'row', padding:12, borderRadius: 20, backgroundColor: '#fbd4a4', alignItems: 'center', justifyContent: 'center', marginBottom: AppPadding}}>
                <View style = {{padding: 12, borderRadius: 20, backgroundColor: NotificationColor, justifyContent: 'center', alignItems: 'center', aspectRatio: 1}}>
                    <Title title={'#38'} color={WhiteColor} size={28} type={true} horizontalPadding={0} verticalPadding={0}/>
                </View>
                <Space space={12}/>
                <View style = {{flex: 1}}>
                    <Title title={"Your're doing better than 60% of other players"} color={WhiteColor} size={16} type={true} horizontalPadding={0} verticalPadding={0}/>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <LinearGradient 
                    colors={['#A0C9FF', '#3786EB', '#3786EB']} 
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}  
                    style={{padding: AppPadding, backgroundColor: PrimaryColorBlue, borderRadius: 20}}
                >
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style = {{transform: [{translateY: 25}]}}>
                            <UserTopWorld avata="" name="Meo Meo" timeMilisecond={12} rank={SilverI} top={1}/>
                        </View>
                        <View style = {{ top: 0, flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <View style = {{transform: [{translateY: -40}]}}>
                                <UserTopWorld avata="" name="Meo Meo" timeMilisecond={12} rank={SilverI} top={2}/>
                            </View>
                            <UserTopWorld avata="" name="Meo Meo" timeMilisecond={12} rank={SilverI} top={3}/>
                        </View>
                    </View>
                    <View style={{justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', flexDirection: 'row'}}>
                        <LinearGradient colors={['#FEC581', '#D38B34']} style = {{  height: 150, backgroundColor: NotificationColor, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 100, right: 100, borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                            <Title title="1" color={WhiteColor} size={40} type={true} horizontalPadding={0} verticalPadding={0}/>
                        </LinearGradient >
                        <LinearGradient colors={["#2AD1AF", "#239B83"]} style = {{ width: 150, height: 100, backgroundColor: GreenColor, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, borderBottomLeftRadius: 50}}>
                            <Title title="2" color={WhiteColor} size={40} type={true} horizontalPadding={0} verticalPadding={0}/>
                        </LinearGradient>
                        <LinearGradient colors={['#FF909A', '#C77178']} style = {{ width: 150, height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50}}>
                            <Title title="3" color={WhiteColor} size={40} type={true} horizontalPadding={0} verticalPadding={0}/>
                        </LinearGradient>
                        
                    </View>
                </LinearGradient>
                {
                    listUserTopRank.map((item, index)=>{
                        return <TopRankElement key={Math.random()*100} top={item.top} avata={item.avata} name={item.name} timeMilisecond={item.timeMilisecond}/>
                    })
                }
                <Space space={300}/>
            </ScrollView>
        </View>
    )
}