import { StyleSheet } from "react-native";

const topStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fa",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  cameraView: {},
  instagramView: {},
  iconsView: {
    flexDirection: "row",
    gap: 8,
  },
});

export default topStyle;
