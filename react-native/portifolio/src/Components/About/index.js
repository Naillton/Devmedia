import React from 'react';
import { View, Text } from 'react-native';
import Appstyles from './styles.scss';

export default function About() {
  return(
    <View style={ Appstyles.container }>
      <Text style={ Appstyles.title }>
        Sobre Mim
      </Text>
      <Text style={ Appstyles.text }>
        Olá Mundooooo, eu me chamo Nailton tenho 22 anos e estou querendo me tornar
        um grande desenvolvedor web e mobile, gosto muito de ficção científica, tecnologia
        e jogos, então, desde pequeno sempre quis saber como desenvolvê-los.
      </Text>
    </View>
  );
}