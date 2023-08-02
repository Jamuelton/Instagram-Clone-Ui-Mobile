import { Image, Text, View } from "react-native";
import postStyle from "./Style";

export function Post({
  perfilImage,
  user,
  local,
  post,
  likedIcon,
  descripition,
}) {
  return (
    <View>
      <View style={postStyle.topPost}>
        <View style={postStyle.userView}>
          <View>
            <Image source={perfilImage} style={postStyle.userIcon} />
          </View>
          <View style={postStyle.userName}>
            <Text style={postStyle.userText}>{user}</Text>
            <Text style={postStyle.userLocal}>{local}</Text>
          </View>
        </View>
        <View style={postStyle.points}>
          <Text style={postStyle.pointsText}>...</Text>
        </View>
      </View>
      <View style={postStyle.postContainer}>
        <Image source={post} style={postStyle.postImage} />
      </View>
      <View style={postStyle.bottomPost}>
        <View style={postStyle.iconsAction}>
          <Text>Coração</Text>
          <Text>comentario</Text>
          <Text>Enviar</Text>
        </View>
        <View style={postStyle.iconsSave}>
          <Text>Salvar</Text>
        </View>
      </View>
      <View style={postStyle.likesContainer}>
        <Image source={likedIcon} style={postStyle.likedIcon} />
        <Text>curtidas</Text>
      </View>
      <View style={postStyle.descriptionContainer}>
        <Text style={postStyle.userDescription}>{user}</Text>
        <Text style={postStyle.description}>{descripition}</Text>
      </View>
    </View>
  );
}
