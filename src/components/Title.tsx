import { Text, View } from 'react-native';


type TitleComponentProps = {
  title: string,
  size: number,
  color: string,
  type: boolean,
  horizontalPadding: number,
  verticalPadding: number
  center?: boolean,
};
export const Title = ({title, size, color, type, horizontalPadding, verticalPadding, center = false}: TitleComponentProps) => {
    return (
        <View style={{alignItems:'flex-start', maxWidth: 350, paddingLeft: horizontalPadding, paddingRight: horizontalPadding, paddingTop: verticalPadding, paddingBottom: verticalPadding}}>
            <Text style={{fontSize: size, fontFamily: type ? 'DynaPuff-Bold' : 'DynaPuff-Regular', color, textAlign:  center?'center':'left'}}>
                {title}
            </Text>
        </View>
    );
};

