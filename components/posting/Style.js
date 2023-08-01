import { StyleSheet } from "react-native";

const postStyle = StyleSheet.create({
  container: {},
  topPost: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  userView: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 8,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  userName: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  userText: {
    fontWeight: "bold",
  },
  userLocal: {
    fontWeight: "300",
  },
  points: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  pointsText: {
    fontWeight: "bold",
    fontSize: 20,
  },

  postContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  postImage: {
    padding: 5,
  },

  bottomPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
  },

  iconsAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 8,
    padding: 5,
  },

  iconsSave: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  likesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 10,
    gap: 8,
  },
  likedIcon: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 10,
    gap: 8,
  },

  userDescription: {
    fontWeight: "bold",
  },
  description: {
    fontWeight: "300",
  },
});

export default postStyle;
