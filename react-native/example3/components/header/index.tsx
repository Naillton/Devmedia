import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Header(){
  return (
    <View style={ styles.container }>
      <StatusBar style='light'/>
      <Text style={ styles.title }>ATOR FAMOSO</Text>
    </View>
  )
}