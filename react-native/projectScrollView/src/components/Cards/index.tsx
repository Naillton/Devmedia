import React from "react";
import { View, Text, Image, ViewPropTypes } from 'react-native';

import { styles } from "./styles";
import casal from '../../assets/casal.png';
import filhos from '../../assets/filhos.png';
import vovo from '../../assets/vovo.png';
import irmas from '../../assets/irmaes.png';

export default function Card(){
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Familia Simpsons
      </Text>
      <View style={ styles.card }>
        <Image style={ styles.image } source={ casal } />
        <Text style={ styles.title }>O Casal</Text>
        <Text style={ styles.paragrafo }>Homer Jay Simpson é o pai e patriarca da família Simpsons.</Text>
        <Text style={ styles.paragrafo }>Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os Simpsons.</Text>
      </View>

      <View style={ styles.card }>
        <Image style={ styles.image } source={ filhos } />
        <Text style={ styles.title }>Os Filhos</Text>
        <Text style={ styles.paragrafo }>Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso.</Text>
        <Text style={ styles.paragrafo }>Lisa Marie é a filha do meio e a mais inteligente.</Text>
        <Text style={ styles.paragrafo }>Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
      </View>

      <View style={ styles.card }>
        <Image style={ styles.image } source={ vovo } />
        <Text style={ styles.title }>O Vovô</Text>
        <Text style={ styles.paragrafo }>Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de Hommer simpson.</Text>
      </View>

      <View style={ styles.card }>
        <Image style={ styles.image } source={ irmas } />
        <Text style={ styles.title }>As Cunhadas</Text>
        <Text style={ styles.paragrafo }>Patty e Selma são as irmães de Margie e vivem de forma 'largada'.</Text>
      </View>
    </View>
  )
}