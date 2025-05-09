import { Image, Text, TouchableOpacity, View } from "react-native"
import { AppPadding } from "../constants/spaces"
import { GrayColor, PrimaryColorBlue, WhiteColor } from "../assets/color"
import EarthIcon from "../assets/icons/EarthIcon"
import { Title } from "../components/Title"
import { Space } from "../components/Space"


type HeaderTeamProps = {
    nameGroup: string,
    visibility: string,
    slug: string,
    numOfMember: number
    type: 'OWN'|"YOURS"|"OTHER"|undefined
}

export const HeaderTeamSection = ({nameGroup, visibility, slug, numOfMember, type}:HeaderTeamProps)=>{
    console.log(type)
    return (
        <View style={{margin: AppPadding/2, marginTop: 0, overflow: 'hidden', backgroundColor: WhiteColor, borderRadius: 12, elevation: 5, paddingBottom: 12}}>
            <Image
                source={require('../assets/images/group_image.jpeg')}
                style = {{width: '100%', height: 200}}
            />
            <Title title={nameGroup} color={GrayColor} size={18} type = {true} horizontalPadding={AppPadding/2} verticalPadding={AppPadding/3}/>
            <View style = {{marginLeft: 12, paddingLeft: 12, paddingRight: 12, borderRadius: 12, backgroundColor: PrimaryColorBlue, alignSelf: 'baseline'}}>
                <Text style = {{color: WhiteColor}}>
                    {`#${slug}`}
                </Text>
            </View>
            <Space space={12}/>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>

                <View style = {{flexDirection: 'row', alignItems: 'center', padding: AppPadding/2, paddingTop: 0}}>
                    <EarthIcon width={24} height={24} color={GrayColor}/>
                    <Space space={6}/>
                    <Title title={visibility} color={GrayColor} size={12} type = {false} horizontalPadding={0} verticalPadding={0}/>
                    
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'center', padding: AppPadding/2, paddingTop: 0}}>
                    <Image source={require('../assets/images/users.png')} style = {{width: 26, height: 26, borderRadius: 20}}/>
                    <Space space={8}/>
                    <Title title={`Over ${numOfMember} ${numOfMember>=2?'members':'member'}`} color={GrayColor} size={12} type = {false} horizontalPadding={0} verticalPadding={0}/>

                </View>
                
            </View>
            {
                    type === 'OTHER' &&
                    <TouchableOpacity style = {{padding: 12, paddingLeft: 24, paddingRight: 24, borderRadius: 20, backgroundColor: PrimaryColorBlue, alignSelf: 'center'}}>
                        <Title title={`Join`} color={WhiteColor} size={12} type = {true} horizontalPadding={0} verticalPadding={0}/>
                    </TouchableOpacity>
                }
        </View>
    )
}