import { Text, View } from "react-native";
import bottomStyle from "./Style";

export function BottomBar() {
  return (
    <View style={bottomStyle.container}>
      <View style={bottomStyle.homeView}>
        <Text>home</Text>
      </View>
      <View style={bottomStyle.searchView}>
        <Text>pesquisar</Text>
      </View>
      <View style={bottomStyle.newView}>
        <Text>New</Text>
      </View>
      <View style={bottomStyle.notificationView}>
        <Text>notificação</Text>
      </View>
      <View style={bottomStyle.perfilView}>
        <Text>perfil</Text>
      </View>
    </View>
  );
}
