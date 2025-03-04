import { TouchableOpacity } from 'react-native';
import { DisableColor, WhiteColor } from '../assets/color';
import { Title } from './Title';

type ButtonProps = {
    title: string;
    color: string;
    fullWidth: boolean;
    disable: boolean;
    onClick: ()=>any;
}

export const Button = ({title, color, fullWidth,disable, onClick}:ButtonProps) => {
    return (
        <TouchableOpacity style = {{width: fullWidth ? '100%' : 'auto', padding: 10, backgroundColor: !disable ? color : DisableColor, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}} onPress={onClick}disabled={disable}>
            <Title title={title} color={WhiteColor} size={16} type = {true} horizontalPadding={0} verticalPadding={0}/>
        </TouchableOpacity>
    );
};
