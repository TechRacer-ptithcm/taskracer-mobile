import { View } from "react-native"
import { Title } from "../components/Title"
import { GrayColor, PrimaryColorRed, WhiteColor } from "../assets/color"
import { Input } from "../components/Input"
import { InputNormal } from "../constants/strings"
import { useEffect, useState } from "react"
import { Checkbox } from "../components/Checkbox"
import { OverlayBubbleAnimation } from "../components/OverlayBubbleAnimation"
import { useSelector } from "react-redux"
import { tokenSelector } from "../redux/selectors/authSelectors"
import { Button } from "../components/Button"
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppPadding } from "../constants/spaces"
import { Space } from "../components/Space"
import LGBT from "../assets/icons/LGBT"
import ManIcon from "../assets/icons/MainIcon"
import WomanIcon from "../assets/icons/WomanIcon"
import { updateUser } from "../services/updateUserInfo"
import { EnumGender } from "../constants/enums"
import { useNavigation } from "@react-navigation/native"
import { BottomTabBar } from "@react-navigation/bottom-tabs"
import { MainStackString } from "../constants/screen"
import { useAppDispatch } from "../redux/hooks"
import { setLoading } from "../redux/slices/appSlice"
import { refresh } from "../services/refresh"
import { setToken } from "../redux/slices/authSlice"

export const EditUserScreen = () => {
    const [name, setName] = useState("");
    const accessToken = useSelector(tokenSelector);
    const [checkedIndex, setCheckedIndex] = useState(0)
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const listGender: EnumGender[] = ["MALE", "FEMALE", "OTHER"]
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const handleClickUpdate = async ()=>{
        dispatch(setLoading(true));
        updateUser({name, gender:listGender[checkedIndex], birth: date, accessToken})
        .then(res=>{
            console.log("Update user successfully", res.data);
            navigation.navigate(MainStackString)
            dispatch(setLoading(false));
        })
        .catch(error=>{
            console.log("Update user error with message:", error);
            if (error.response?.status === 401){
                refresh()
                    .then(res =>{
                        console.log('new access token', res.data.data.access_token);
                        dispatch(setToken(res.data.data.access_token));
                    })
                    .catch(error=>{
                        console.log('refresh error with message:', error);
                    })
            }
        })
    }
    return (
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <OverlayBubbleAnimation/>
            <View style={{width: '100%', padding: AppPadding, justifyContent: 'center', alignItems: 'center'}}>

                <Title title="Your Infomation" color={PrimaryColorRed} size={28} type={true} horizontalPadding={0} verticalPadding={0} center={true}/>
                <Space space={12}/>
                <Title title = "Let's allow us to know about u" size = {20} color = {GrayColor} type = {true} horizontalPadding={0} verticalPadding={0}/>
                
                <Space space={42}/>
                <View style={{width: '100%', padding: 24, borderWidth: 1, borderColor: PrimaryColorRed, borderRadius: 16, backgroundColor: WhiteColor}}>

                    <View style={{width: '100%'}}>
                        <Input placeholder="Your full name" value={name} onChangeText={setName} type={InputNormal}/>
                    </View>
                    <Space space={24}/>

                    <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>

                        <Title title="Select your gender" color={PrimaryColorRed} size={18} type={true} horizontalPadding={0} verticalPadding={0} center={true}/>
                        <Checkbox listOptions={[<ManIcon width={24} height={24}/>, <WomanIcon width={24} height={24}/>, <LGBT width={24} height={24} color={PrimaryColorRed}/>]} checkedIndex = {checkedIndex} setCheckedHandler={setCheckedIndex}/>
                    </View>
                    <Space space={24}/>

                    <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <Title title="Birthday: " color={PrimaryColorRed} size={18} type={true} horizontalPadding={0} verticalPadding={0} center={true}/>
                            {date&&     
                                <Title title={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`} color={PrimaryColorRed} size={16} type={true} horizontalPadding={0} verticalPadding={0} center={true}/>
                            }

                        </View>
                        <Button title="Select" color={PrimaryColorRed} fullWidth={false} disable={false} onClick={() => setOpen(true)}/>
                    </View>
                    {
                        open && 
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={"date"}
                            is24Hour={true}
                            onChange={(event, date)=>{
                                if (event.type === "set") {
                                    setOpen(false);
                                    setDate(date || new Date());
                                }else{
                                    setOpen(false);
                                }
                            }}
                        />
                    }
                </View>
                <Space space={24}/>

                <Button title="Update" color={PrimaryColorRed} fullWidth={true} disable={false} onClick={()=>{handleClickUpdate()}}/>
            </View>
        </View>
    )
}