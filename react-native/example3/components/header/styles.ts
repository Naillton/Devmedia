import { StyleSheet } from "react-native";
import { theme } from "../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#4169E1',
    justifyContent: 'space-evenly'
  },

  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: theme.fonts.title700
  }
});