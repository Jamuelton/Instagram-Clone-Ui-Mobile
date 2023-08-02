import { Text, View } from "react-native";
import topStyle from "./Style";

export function TopBar() {
  return (
    <View style={topStyle.container}>
      <View>
        <Text>camera</Text>
      </View>
      <View>
        <Text>Instagram</Text>
      </View>
      <View>
        <Text>Televisao</Text>
        <Text>Enviar</Text>
      </View>
    </View>
  );
}
