import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerText: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: 300,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 5,
    },

    title: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10,
    },

    subtitle: {
        padding: 10,
      color: '#fff',
      fontSize: 18,
      marginTop: 10,
    }
});