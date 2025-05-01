import { View } from "react-native"
import { GrayColor, WhiteColor } from "../assets/color"
import { Input } from "../components/Input"
import { useState } from "react"
import { InputNormal } from "../constants/strings"
import { Title } from "../components/Title"



export const CreateNewTeamSection = ()=>{
    const [name, setName] = useState("");
    const [privacy, setPrivacy] = useState<'PUBLIC'|'PRIVATE'>('PUBLIC');
    return (
        <View style = {{position: 'absolute', backgroundColor: WhiteColor, borderRadius: 20, elevation: 5, justifyContent: 'center'}}>
            <Title title='Start At: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
            <Input value={name} onChangeText={value=>setName(value)} placeholder="Your group's name" type={InputNormal}/>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Title title='Privacy: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                {
                    privacy === "PUBLIC"?
                    <View>
                        <Title title='PUBLIC' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                    </View>:
                    <View>
                        <Title title='PRIVATE: ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                    </View>
                }
            </View>
        </View>
    )
}