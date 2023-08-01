import { Text, View } from "react-native";
import { Story } from "../story/Story";

export function Container() {
  return (
    <View>
      <View>
        <Text>Barra cima</Text>
      </View>
      <View>
        <Story />
      </View>
      <View>
        <Text>Postagem</Text>
      </View>
      <View>
        <Text>Barra Baixo</Text>
      </View>
    </View>
  );
}
