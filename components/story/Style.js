import { StyleSheet } from "react-native";

const storyStyle = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  borderStory: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    borderWidth: 4,
    borderColor: "#e67e22",
    borderRadius: 100,
    padding: 2,
  },
  storyImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 100,
  },
});

export default storyStyle;
