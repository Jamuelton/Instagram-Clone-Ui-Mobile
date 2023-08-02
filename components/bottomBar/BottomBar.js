import { Text, View } from "react-native";
import topStyle from "./Style";

export function TopBar() {
  return (
    <View style={topStyle.container}>
      <View style={topStyle.cameraView}>
        <Text>camera</Text>
      </View>
      <View style={topStyle.instagramView}>
        <Text>Instagram</Text>
      </View>
      <View style={topStyle.iconsView}>
        <Text>Televisao</Text>
        <Text>Enviar</Text>
      </View>
    </View>
  );
}
