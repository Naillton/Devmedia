import { StyleSheet } from "react-native";
import { theme } from "../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 300,
    height: 280,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  image: {
    width: 300,
    height: 180,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
  },

  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    marginTop: 20,
  },

  subtitle: {
    marginTop: 20,
    fontFamily: theme.fonts.text400
  }
});