import { Image, View } from "react-native";
import storyStyle from "./Style";

export function Story({ imagem }) {
  return (
    <View style={storyStyle.container}>
      <View style={storyStyle.borderStory}>
        <Image source={imagem} style={storyStyle.storyImage} />
      </View>
    </View>
  );
}
