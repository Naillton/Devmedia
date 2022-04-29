import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: "100%", 
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },

  cont: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor:"#fff",
    opacity: 0.9,
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
  },

  text: {
    textTransform: "uppercase",
    fontSize: 30,
    marginTop: 40,
    textAlign: "center",
    marginBottom: 20,
  },
})