import { Image, View } from "react-native"
import { Title } from "./Title"
import { BackgroundColor, BubbleColor, GrayColor, PrimaryColorBlue, PrimaryColorRed, WhiteColor } from "../assets/color"
import { Space } from "./Space"
import ThreeDotIcon from "../assets/icons/ThreeDotIcon"
import TaskIcon from "../assets/icons/TaskIcon"
import CheckIcon from "../assets/icons/CheckIcon"

type TeamProps = {
    id: number,
    slug: string,
    name: string,
    visibility: string,
    user: string[]
}

export const TeamComponent = ({id, slug, name, visibility, user} : TeamProps)=>{
    const seen = false;
    return (
        <View style = {{position: 'relative', borderRadius: 20, backgroundColor: id%2===0?PrimaryColorRed: PrimaryColorBlue, padding: 24}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <Title title={name} size={20} color={WhiteColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                <ThreeDotIcon width={30} height={30} color={WhiteColor}/>
            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 14}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                    <TaskIcon width = {20} height={20} color = {WhiteColor}/>
                    <Space space={6}/>
                    <Title title={'204 tasks'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CheckIcon width = {20} height={20} color = {WhiteColor}/>
                    <Space space={6}/>
                    <Title title={'150/204 completed'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>
            </View>
            <View style  = {{flexDirection: 'row', alignItems: 'center', marginBottom: 14}}>
                <View style = {{borderWidth: 1, borderColor: GrayColor, position: 'relative', width: 30, height: 30, borderRadius: 30, overflow: 'hidden', backgroundColor: BubbleColor}}>
                    <Image source={{uri: ''}} style = {{width: 30, height: 30}}/>
                </View>
                <View style = {{borderWidth: 1, borderColor: GrayColor, position: 'relative', width: 30, height: 30, borderRadius: 30, overflow: 'hidden', backgroundColor: BubbleColor, justifyContent: 'center', alignItems: 'center', marginLeft: -8}}>
                    <Title title={'20+'} size={12} color={GrayColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                </View>
                <Space space={4}/>
                <Title title={'David Nop and 35 others'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>

            </View>
            <View style = {{alignSelf: 'center', borderBottomWidth: 1, borderColor: WhiteColor}}>
                <Title title={'View details'} size={12} color={WhiteColor} type={false} verticalPadding={0} horizontalPadding={0}/>
            </View>
        </View>
    )
}