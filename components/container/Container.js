import { Text, View, FlatList } from "react-native";
import { Story } from "../story/Story";

import { Post } from "../posting/Posting";
import { TopBar } from "../topBar/TopBar";

export function Container() {
  const dataStories = [
    {
      id: 1,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 2,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 3,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 4,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 5,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 6,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 7,

      image: require("../../assets/jamuelton.png"),
    },
    {
      id: 8,

      image: require("../../assets/jamuelton.png"),
    },
  ];

  const dataPosts = [
    {
      id: 1,
      perfilImage: require("../../assets/jamuelton.png"),
      user: "Jamuelton",
      local: "Garanhuns",
      post: require("../../assets/jamuelton.png"),
      likedIcon: require("../../assets/jamuelton.png"),
      descripition: "que dia bonito",
    },
    {
      id: 2,
      perfilImage: require("../../assets/jamuelton.png"),
      user: "Jamuelton",
      local: "Garanhuns",
      post: require("../../assets/jamuelton.png"),
      likedIcon: require("../../assets/jamuelton.png"),
      descripition: "que dia bonito",
    },
    {
      id: 3,
      perfilImage: require("../../assets/jamuelton.png"),
      user: "Jamuelton",
      local: "Garanhuns",
      post: require("../../assets/jamuelton.png"),
      likedIcon: require("../../assets/jamuelton.png"),
      descripition: "que dia bonito",
    },
    {
      id: 4,
      perfilImage: require("../../assets/jamuelton.png"),
      user: "Jamuelton",
      local: "Garanhuns",
      post: require("../../assets/jamuelton.png"),
      likedIcon: require("../../assets/jamuelton.png"),
      descripition: "que dia bonito",
    },
  ];

  const StoryItem = ({ image }) => <Story imagem={image} />;
  const PostItem = ({
    perfilImage,
    user,
    local,
    post,
    likedIcon,
    descripition,
  }) => (
    <Post
      perfilImage={perfilImage}
      user={user}
      local={local}
      post={post}
      likedIcon={likedIcon}
      descripition={descripition}
    />
  );

  return (
    <View>
      <View>
        <TopBar />
      </View>
      <View>
        <FlatList
          data={dataStories}
          renderItem={({ item }) => <StoryItem image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View>
        <FlatList
          data={dataPosts}
          renderItem={({ item }) => (
            <PostItem
              perfilImage={item.perfilImage}
              user={item.user}
              local={item.local}
              post={item.post}
              likedIcon={item.likedIcon}
              descripition={item.descripition}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text>Barra Baixo</Text>
      </View>
    </View>
  );
}
