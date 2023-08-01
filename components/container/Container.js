import { Text, View, FlatList } from "react-native";
import { Story } from "../story/Story";

import jamuPhoto from "../../assets/jamuelton.png";

export function Container() {
  const data = [
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

  const Item = ({ image }) => <Story imagem={image} />;

  return (
    <View>
      <View>
        <Text>Barra cima</Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
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
