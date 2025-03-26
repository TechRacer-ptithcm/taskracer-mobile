import { View } from "react-native"
import { Title } from "./Title"
import { useState } from "react"
import { EnumPriority, EnumStatus } from "../constants/enums";
import { PrimaryColorRed } from "../assets/color";
import { Input } from "./Input";
import { InputNormal } from "../constants/strings";
import { useSelector } from "react-redux";
import { tokenSelector } from "../redux/selectors/authSelectors";
import { createTask } from "../services/createTask";
import { Button } from "./Button";



export const CreateTaskPopUp = () => {
    const [content, setContent] = useState("");
    const [type, setType] = useState("");
    const [priority, setPriority] = useState<EnumPriority>("LOW");
    const [status, setStatus] = useState<EnumStatus>("OPEN");
    const accessToken = useSelector(tokenSelector);
    const createTaskAction = async () => {
        await createTask({accessToken, type, content, priority, status}).then(res=>{
            console.log("Create task successfully: ", res);
        })
        .catch(err=>{
            console.log("Create task error: ", err);
        });
    }
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Title title={"Create Task"} type={false} color={PrimaryColorRed} size={18} horizontalPadding={0} verticalPadding={0} center={false}/>
            <Input placeholder="Content" type={InputNormal} value={content} onChangeText={setContent}/>
            <Button title="Create" color={PrimaryColorRed} fullWidth={false} disable={false} onClick={createTaskAction}/>
        </View>
    )
}