import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'yellow',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
  },

  card: {
    marginTop: 20,
    marginLeft: 20,
    width: '90%',
    height: 450,
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

  image: {
    width: 250,
    height: 250,
  },

  paragrafo: {
    fontSize: 16,
    marginBottom: 10,
  }
})