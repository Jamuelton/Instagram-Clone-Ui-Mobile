import { Image, Text, View } from "react-native";
import postStyle from "./Style";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

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
          <Ionicons name="md-heart-sharp" size={24} color="black" />
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Feather name="send" size={24} color="black" />
        </View>
        <View style={postStyle.iconsSave}>
          <SimpleLineIcons name="tag" size={24} color="black" />
        </View>
      </View>
      <View style={postStyle.likesContainer}>
        <Image source={likedIcon} style={postStyle.likedIcon} />
        <Text>45 curtidas</Text>
      </View>
      <View style={postStyle.descriptionContainer}>
        <Text style={postStyle.userDescription}>{user}</Text>
        <Text style={postStyle.description}>{descripition}</Text>
      </View>
    </View>
  );
}
