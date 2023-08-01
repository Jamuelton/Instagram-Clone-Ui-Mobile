import { Image, View } from "react-native";
import storyStyle from "./Style";

export function Story() {
  return (
    <View style={storyStyle.container}>
      <View style={storyStyle.borderStory}>
        <Image
          source={require("../../assets/stories/jamuelton.png")}
          style={storyStyle.storyImage}
        />
      </View>
    </View>
  );
}
