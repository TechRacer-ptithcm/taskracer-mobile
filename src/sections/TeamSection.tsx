import { View } from "react-native"
import { AvataBaseWord } from "../components/AvataBaseWord"
import { Title } from "../components/Title"
import { GrayColor } from "../assets/color"


export const TeamSection = ()=>{
    return (
        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <AvataBaseWord full_name="Alex Gi" customSize={24}/>
                <View>

                    <Title title='Cummunity name' color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                    <Title title='Cummunity notifications' color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
                </View>
            </View>
            <View>
                <Title title='19:34' color={GrayColor} size={18} type={true} horizontalPadding={0} verticalPadding={0}/>
            </View>
        </View>
    )
}