import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center"
  },

  containerFood: {
    height: 100,
    width: 150,
    backgroundColor: "#87CEEB",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

   textFood: {
    color: "#0000CD"
   },

   containerAll: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20
   }
})