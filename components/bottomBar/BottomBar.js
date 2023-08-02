import { Image, View } from "react-native";
import bottomStyle from "./Style";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export function BottomBar() {
  return (
    <View style={bottomStyle.container}>
      <View style={bottomStyle.homeView}>
        <Entypo name="home" size={24} color="black" />
      </View>
      <View style={bottomStyle.searchView}>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <View style={bottomStyle.newView}>
        <Octicons name="diff-added" size={24} color="black" />
      </View>
      <View style={bottomStyle.notificationView}>
        <AntDesign name="hearto" size={24} color="black" />
      </View>
      <View style={bottomStyle.perfilView}>
        <Image
          source={require("../../assets/jamuelton.png")}
          style={bottomStyle.likedIcon}
        />
      </View>
    </View>
  );
}
