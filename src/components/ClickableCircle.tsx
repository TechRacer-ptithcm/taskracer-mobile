import { TouchableOpacity } from 'react-native';
import { PurpleColor } from '../assets/color';

type ClickableCircleProps = {
    size: number;
    color: string;
    onPress: () => void;
    children?: React.ReactNode;
}

export const ClickableCircle = ({size, color, onPress, children}: ClickableCircleProps) => {
    return (
        <TouchableOpacity style={{width: size, height: size, borderRadius: size, backgroundColor: color, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: PurpleColor}} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};
