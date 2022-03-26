import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import Perfil from '../assets/Foto.png';

export function Actor(){
  return (
    <View style={ styles.container }>
      <View style={ styles.card }>
        <Image
          source={ Perfil }
          style={ styles.image }
        />
        <Text style={ styles.title }>Samuel Jackson</Text>
        <Text style={ styles.subtitle }>Ator e produtor norte-americano</Text>
      </View>
    </View>
  )
}