import React from "react";
import { View, Text, Image } from 'react-native';

import Img from '../../assets/img2.png';
import { styles } from "./style";

export default function Conteudo(){
  return (
    <View style={ styles.contContainer }>
      <Text style={ styles.contTitle }>Os principais jogos estão aqui</Text>
      <Image
        source={ Img }
        style={ styles.contImg }
      />
      <Text style={ styles.contText }>A familia Nintendo Switch é o lar de jogos exclusivos
        da serie Super Smash Bros.
      </Text>
    </View>
  );
}