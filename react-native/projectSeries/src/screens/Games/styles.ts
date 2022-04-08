import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'black',
  },

  title: {
    fontSize: 30,
    color: "green",
    marginTop: 30,
  },

  text: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  
  backImg: {
    width: 300,
    height: 200,
    marginVertical: 20,
  },

  containerText: {
    backgroundColor: 'black',
    opacity: 0.5,
    width: '100%',
  },

  textGame: {
    color: 'white',
    padding: 10,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  }
});