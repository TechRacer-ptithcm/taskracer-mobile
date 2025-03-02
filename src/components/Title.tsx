import { Text, View } from 'react-native';


type TitleComponentProps = {
  title: string,
  size: number,
  color: string,
};
export const Title = ({title, size, color}: TitleComponentProps) => {
    return (
        <View style={{padding: 10, alignItems: 'center', maxWidth: 300}}>
            <Text style={{fontSize: size, fontFamily: 'DynaPuff-Bold', color, textAlign: 'center'}}>
                {title}
            </Text>
        </View>
    );
};
