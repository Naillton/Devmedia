import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDB28',
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
  },

  btn: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#228DDD',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  textOne: {
    fontSize: 15,
  },

  btnCont: {
    flexDirection: 'row',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  }
});