import { View } from "react-native";


type SpaceProps = {
    space: number;
}
export const Space = ({space}: SpaceProps) => {
    return (
        <View style={{padding: space / 2}} />
    );
}