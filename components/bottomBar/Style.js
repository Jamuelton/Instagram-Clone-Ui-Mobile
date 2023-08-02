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
});

export default bottomStyle;
