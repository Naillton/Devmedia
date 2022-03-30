import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 300,
    height: 300,
  },

  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gold',
    textAlign: 'center',
  },

  text: {
    margin: 20,
    fontSize: 16,
    color: 'gold',
  },

  btn: {
    width: 100,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#ecd540',
    borderWidth: 5,
    borderColor: '#ffcc33',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
})