import { Text, View } from 'react-native';


type TitleComponentProps = {
  title: string,
  size: number,
  color: string,
  type: boolean,
  horizontalPadding: number,
  verticalPadding: number
};
export const Title = ({title, size, color, type, horizontalPadding, verticalPadding}: TitleComponentProps) => {
    return (
        <View style={{alignItems: 'flex-start', maxWidth: 300, paddingLeft: horizontalPadding, paddingRight: horizontalPadding, paddingTop: verticalPadding, paddingBottom: verticalPadding}}>
            <Text style={{fontSize: size, fontFamily: type ? 'DynaPuff-Bold' : 'DynaPuff-Regular', color, textAlign: 'left'}}>
                {title}
            </Text>
        </View>
    );
};
