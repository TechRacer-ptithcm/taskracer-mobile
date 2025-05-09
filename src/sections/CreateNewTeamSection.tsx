import { Alert, TouchableOpacity, View } from "react-native"
import { GrayColor, PrimaryColorBlue, WhiteColor } from "../assets/color"
import { Input } from "../components/Input"
import { useCallback, useState } from "react"
import { InputNormal } from "../constants/strings"
import { Title } from "../components/Title"
import { Space } from "../components/Space"
import { createTeam } from "../services/createTeam"
import { Team } from "../models/Team"

type CreateNewTeamProps = {
    setShowCreateTeam: React.Dispatch<React.SetStateAction<boolean>>,
    setIsReload: React.Dispatch<React.SetStateAction<boolean>>,
    isReload: boolean
}

export const CreateNewTeamSection = ({setShowCreateTeam, setIsReload, isReload}: CreateNewTeamProps)=>{
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [privacy, setPrivacy] = useState<'PUBLIC'|'PRIVATE'>('PUBLIC');
    const handleCreateTeam = useCallback(()=>{
        if (slug && name && privacy){

            createTeam({slug: slug, name: name, visibility: privacy})
                .then(res=>{
                    console.log("Create Team successfully");
                    setShowCreateTeam(false);
                    setIsReload(!isReload)
                    return res.data.name
                })
                .catch(error=>{
                    console.log("Create team error with message:", error)
                })
        }else{
            Alert.alert("Please provide enough infomations")
        }
    }, [slug, name, privacy])
    return (
        <View style = {{position: 'absolute', borderRadius: 20, elevation: 5, justifyContent: 'center', width: '100%', height: '100%', zIndex: 100, alignItems: "center"}}>
            <TouchableOpacity onPress={()=>{
                setShowCreateTeam(false)
            }} style = {{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: '#000', opacity: 0.5}}/>
            <View style = {{alignItems: 'center', backgroundColor: WhiteColor, padding: 24, borderRadius: 12, elevation: 5, width: '80%'}}>

                <Title title='Create Your Group' size={18} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                <Space space={12}/>
                <Input value={name} onChangeText={value=>setName(value)} placeholder="Your group's name" type={InputNormal}/>
                <Input value={slug} onChangeText={value=>setSlug(value)} placeholder="Your group's topic" type={InputNormal}/>
                <TouchableOpacity onPress={()=>{
                    setPrivacy(privacy==="PUBLIC"?"PRIVATE":"PUBLIC")
                }} style = {{flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', paddingLeft: 12}}>
                    <Title title='Visibility:    ' size={16} color={GrayColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                    {
                        privacy === "PUBLIC"?
                        <View>
                            <Title title='PUBLIC' size={12} color={GrayColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                        </View>:
                        <View>
                            <Title title='PRIVATE' size={12} color={GrayColor} type={false} verticalPadding={0} horizontalPadding={0}/>
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity style = {{backgroundColor: PrimaryColorBlue, borderRadius: 30, padding: 12, marginTop: 20}} onPress={handleCreateTeam}>
                    <Title title='Create' size={16} color={WhiteColor} type={true} verticalPadding={0} horizontalPadding={0}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}