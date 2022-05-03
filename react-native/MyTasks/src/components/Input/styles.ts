import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  list: {
    height: 500,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    backgroundColor: "#A020F0",
    borderColor: "#A020F0",
    borderRadius: 10,
    height: 100,
    width: 360,
    padding: 20,
    justifyContent: "space-between"
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: 150,
    height: 50,
    fontSize: 18,
  },

  btn: {
    width: 100,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20B2AA",
    borderRadius: 100,
  },

  btnDel: {
    width: 50,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 100,
  },

  cont: {
    flexDirection: "row",
  },

  itens: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    width: 100,
  },

  item: {
    fontSize: 16,
    textTransform: "uppercase"
  },

  scroll: {
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
  },

  check: {
    marginTop: 40,
    width: 260,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  correct: {
    backgroundColor: "#00FF00",
    width: 260,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
})