import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#762933",
  },

  cardVinho: {
    width: 340,
    height: 100,
    borderRadius: 5,
    backgroundColor: "pink",
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  Titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 10,
  },

  vinhoImg: {
    width: 50,
    height: 100
  },

  cardBoxDescricao: {
    marginLeft: 20,
    alignItems: "center",
    width: 250,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  
  cardDescricao: {
    fontSize: 12,
    textAlign: "justify"
  }
})