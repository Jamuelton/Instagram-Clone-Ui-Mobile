import { StyleSheet } from "react-native";

const storyStyle = StyleSheet.create({
  container: {
    backgroundColor: "red",
    margin: 10,
    padding: 10,
  },
  borderStory: {
    width: "100%",
    borderWidth: 4,
    borderColor: "#e67e22",
    borderRadius: 100,
    padding: 2,
  },
  storyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: 100,
  },
});

export default storyStyle;
