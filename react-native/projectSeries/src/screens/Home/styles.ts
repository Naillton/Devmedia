import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2c2c2c',
  },

  title: {
    color: "green",
    fontSize: 30,
  },

  subtitle: {
    color: "white",
    padding: 10,
  },

  containerImg: {
    flexDirection: "column",
    marginTop: 20,
  },

  baseImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  img: {
    width: 50,
    height: 50,
  },

  btn: {
    flexDirection: "row",
    fontSize: 12,
    backgroundColor: "#00ff00",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },

  btnText: {
    color: "black",
    marginLeft: 10,
    textAlign: "center",
    marginTop: 10,
  }
});