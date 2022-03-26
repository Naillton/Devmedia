import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import Film from '../assets/Filme.png';

export function Content(){
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Sobre o Ator</Text>
      <Text style={ styles.subtitle }>Sua vida</Text>
      <Text style={ styles.paragraph }>Nascido em Washington, DC, 21 de dezembro de 1948</Text>
      <Text style={ styles.paragraph }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>
      <Text style={ styles.subtitle }>Inicio de carreira</Text>
      <Text style={ styles.paragraph }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
      <Image
        source={ Film }
        style={ styles.image }
      />
    </View>
  )
}