import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#00BFFF",
    borderWidth: 2,
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
    borderColor: "#00BFFF",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  img: {
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
  },

  containerText: {
    width: 300,
  },

  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: 14,
    color: "white",
    textAlign: "center"
  }
})
