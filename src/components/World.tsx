import { ScrollView, Text, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, GrayColor, GreenColor, NotificationColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from "../assets/color"
import { AppPadding } from "../constants/spaces"
import { Space } from "./Space"
import { UserTopWorld } from "./UserTopWorld"
import { BronzeII, SilverI } from "../constants/rank"
import { LinearGradient } from "expo-linear-gradient"
import { TopRankElement } from "./TopRankElement"
import { useEffect, useState } from "react"
import { getLeaderBoard, GetLeaderBoardData } from "../services/getLeaderBoard"
import { getCurrentData } from "../services/getCurrentUserData"
import { getPercentTop } from "../services/getPercentTop"


export const World = ()=>{
    const [leaderBoard, setLeaderBoard] = useState<GetLeaderBoardData[]>([]);
    const [top, setTop] = useState<number>(0);
    
    useEffect(()=>{
        getLeaderBoard()
            .then(res=>{
                setLeaderBoard(res.data);
                console.log("Get leader board successully");
            })
            .catch(error=>{
                console.log("Get leaderboard error with message:", error)
            })
    }, [])
    useEffect(()=>{
                getPercentTop()
                    .then(res=>{
                        console.log("Get user successfully");
                        setTop(res.data.top)
                    })
                    .catch(error=>{
                        console.log('Get user error with message:', error);
                    })
            }, [])
    return (
        <View style = {{marginLeft: AppPadding, marginRight: AppPadding}}>
            <View style = {{flexDirection: 'row', padding:12, borderRadius: 20, backgroundColor: '#fbd4a4', alignItems: 'center', justifyContent: 'center', marginBottom: AppPadding}}>
                <View style = {{padding: 12, borderRadius: 20, backgroundColor: NotificationColor, justifyContent: 'center', alignItems: 'center', aspectRatio: 1}}>
                    <Title title={`#${Math.round(top)}`} color={WhiteColor} size={28} type={true} horizontalPadding={0} verticalPadding={0}/>
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
                    <View style={{justifyContent: 'center', alignItems: 'center', zIndex: 6}}>
                        <View style = {{transform: [{translateY: 25}]}}>
                            <UserTopWorld name={leaderBoard[0]?.user?.name?leaderBoard[0].user.name: "Anonimous User"} rank={SilverI} top={1} score={leaderBoard[0]?.score?leaderBoard[0].score: 0}/>
                        </View>
                        <View style = {{ top: 0, flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <View style = {{transform: [{translateY: -40}]}}>
                                <UserTopWorld name={leaderBoard[1]?.user?.name?leaderBoard[1].user.name: "Anonimous User"} rank={SilverI} top={2} score={leaderBoard[1]?.score?leaderBoard[0].score: 0}/>
                            </View>
                            <UserTopWorld name={leaderBoard[2]?.user?.name?leaderBoard[2].user.name: "Anonimous User"} rank={SilverI} top={3} score={leaderBoard[2]?.score?leaderBoard[0].score: 0}/>
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
                    leaderBoard.map((item, index)=>{
                        return <TopRankElement key={Math.random()*100} top={index+1} name={item.user.name} score={item?.score}/>
                    })
                }
                <Space space={300}/>
            </ScrollView>
        </View>
    )
}