import React from "react";
import { View, Text, Image } from 'react-native';
import Img from '../../assets/react.png';
import { styles } from "./style";

export default function Main(){
  return (
    <View>
      <Text style={ styles.title }>Lançamento da versão 0.62</Text>
      <Image
        source={ Img }
        style={ styles.img }
      />
      <Text style={ styles.paragraph }>
        Hoje estamos lançando a versão 0.62 do react native{'\n'}
        que inclui suporte para Flipper por padrão. Este lançamento{'\n'}
        vem no meio e uma pandemia global. Estamos lançando esta versão
        hoje para respeitar o trabalho de centenas de contribuintes.
      </Text>
    </View>
  )
}