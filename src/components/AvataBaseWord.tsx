import { Text, View } from "react-native";
import { WhiteColor } from "../assets/color";


type AvataBaseWordParams = {
  full_name: string,
  customSize: number,
}

export const AvataBaseWord = ({full_name, customSize}: AvataBaseWordParams) => {
  const words = full_name?full_name.split(" "):["Owner"];
  let userNameShortHand = "Owner"
  if (words.length<2){
    userNameShortHand = words[0][0];
  } else{
    userNameShortHand = words[words.length-2][0]+ words[words.length-1][0]
  }
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