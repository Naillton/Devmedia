import React from "react";
import { View, Text } from 'react-native';
import { styles } from "./styles";

export function Header(){
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }> SORTEIO REACT</Text>
      <Text>
        VAMOS VER QUEM E O VENCEDOR
      </Text>
    </View>
  )
}