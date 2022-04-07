import React from "react";
import { ImageBackground, View, Text } from "react-native";

import fundo from '../assets/fundo.png';
import { styles } from "./styles";

export default function Fundo(){
  return(
    <ImageBackground style={ styles.container } source={ fundo }>
      <View style={ styles.containerText }>
        <Text style={ styles.title }>
          Planeta Terra
        </Text>
        <Text style={ styles.subtitle }>
          Nosso planeta é um dos oito que estão no Sistema Solar orbitando em torno de uma estrela central: o Sol.
        </Text>
      </View>
    </ImageBackground>
  )
}