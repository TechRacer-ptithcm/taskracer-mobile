import DateTimePicker from '@react-native-community/datetimepicker';
import { useCallback } from 'react';


type ClockSetTimeProps = {
    time: Date,
    setTime: (time: Date) => void,
    mode: 'date'|'time',
    setShow: (show: boolean) => void,
}

export const ClockSetTime = ({time, setTime, mode, setShow}: ClockSetTimeProps) => {
    return (
        <DateTimePicker
            testID="dateTimePicker"
            mode={mode}
            value={time}
            is24Hour={true}
            onChange={(_, selectedDate) => {
                const currentDate = selectedDate || time;
                setTime(currentDate);
                setShow(false);
            }}
        />
    )
}