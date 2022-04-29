import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 414,
    height: 680,
  },

  containerCount: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: "yellow",
    backgroundColor: "#fff",
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },

  texto: {
    color: "blue",
    fontSize: 30,
    textAlign: "center",
  },

  text: {
    fontSize: 24,
    marginHorizontal: 10,
  },

  input: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },

  count: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  btnPlacar: {
    backgroundColor: "#8B0000",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  btnResponse: {
    backgroundColor: "#006400",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#008000",
    borderWidth: 2,
    borderRadius: 3,
  },

  contBtn: {
    flexDirection: "row",
  },

  textBtn: {
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase",
  },

  Avoid: {
    marginBottom: 120,
  }
})