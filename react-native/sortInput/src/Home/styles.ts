import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    textTransform: "uppercase",
    fontSize: 30,
  },

  input: {
    width: 140,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    margin: 20,
  },

  containerSort: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEEB",
    margin: 10,
    borderRadius: 100,
  },

  btn: {
    backgroundColor: "#87CEEB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  }
})