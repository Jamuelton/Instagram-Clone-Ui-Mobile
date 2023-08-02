import { StyleSheet } from "react-native";

const bottomStyle = StyleSheet.create({
  container: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    backgroundColor: "#f5f6fa",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  homeView: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchView: {
    justifyContent: "center",
    alignItems: "center",
  },
  newView: {
    justifyContent: "center",
    alignItems: "center",
  },
  notificationView: {
    justifyContent: "center",
    alignItems: "center",
  },
  perfilView: {
    justifyContent: "center",
    alignItems: "center",
  },
  likedIcon: {
    width: 24,
    height: 24,
    borderRadius: 100,
  },
});

export default bottomStyle;
