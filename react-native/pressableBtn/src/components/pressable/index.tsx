import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

export function PressableComponent() {
  return(
    <View style={ styles.container }>
      <Pressable 
        onPress={() => {}}
        style={ styles.button }
        onPressIn={() => { console.log("PressIn"); }}
      >
        <Text style={ styles.text }>Pressione</Text>
      </Pressable>
    </View>
  )
}