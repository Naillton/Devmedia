import { StyleSheet } from "react-native";
import { theme } from "../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
  },

  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 30,
    padding: 20,
  },

  subtitle: {
    fontSize: 15,
    fontFamily: theme.fonts.title700,
    paddingLeft: 20,
    marginTop: 10,
  },

  paragraph: {
    paddingLeft: 20,
    marginTop: 10,
    fontFamily: theme.fonts.text400,
  },

  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginLeft: 50,
  }
});