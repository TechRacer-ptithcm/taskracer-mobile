import { Text, View } from "react-native";
import { WhiteColor } from "../assets/color";


type AvataBaseWordParams = {
  full_name: string,
  customSize: number,
}

export const AvataBaseWord = ({full_name, customSize}: AvataBaseWordParams) => {
  const userNameShortHand = (full_name ? full_name : 'Owner')
    .split(' ')
    .map(word => {
      return word[0];
    })
    .join('');
  return (
    <View
      style={{
        width: customSize || 40,
        height: customSize || 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#555',
      }}>
      <Text style={{fontSize: customSize / 3 || 12, color: WhiteColor}}>{userNameShortHand}</Text>
    </View>
  );
}