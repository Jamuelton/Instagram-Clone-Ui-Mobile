import { Text, View } from "react-native";
import topStyle from "./Style";
import { Feather } from "@expo/vector-icons";

export function TopBar() {
  return (
    <View style={topStyle.container}>
      <View style={topStyle.cameraView}>
        <Feather name="camera" size={24} color="black" />
      </View>
      <View style={topStyle.instagramView}>
        <Text>Instagram</Text>
      </View>
      <View style={topStyle.iconsView}>
        <Feather name="tv" size={24} color="black" />
        <Feather name="send" size={24} color="black" />
      </View>
    </View>
  );
}
