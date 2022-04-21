import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

import { styles } from './styles';

import imgVinhoBranco from '../../../assets/vinho-branco.jpg';
import imgVinhoRose from '../../../assets/vinho-rose.jpg';
import imgVinhoTinto from '../../../assets/vinho-seco.jpg';
import imgVinhoEspecial from '../../../assets/vinho-especial.jpg';

export function Catalogo() {
  return(
      <View style={ styles.container }>
        <Text style={ styles.Titulo}>
          Esse é nosso catalogo de vinhos
        </Text>
        <Text>
          Trabalhamos com vinhos dos seguintes tipos.
        </Text>
        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ imgVinhoBranco } />
          <View style={ styles.cardBoxDescricao }>
            <Text style={ styles.cardTitulo}>Chatigny Chardonnay</Text>
            <Text style={ styles.cardDescricao}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
          </View>
        </View>

        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ imgVinhoRose } />
          <View style={ styles.cardBoxDescricao}>
            <Text style={ styles.cardTitulo}>Concha y Toro Exportacion</Text>
            <Text style={ styles.cardDescricao}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
          </View>
        </View>

        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ imgVinhoTinto } />
          <View style={ styles.cardBoxDescricao}>
            <Text style={ styles.cardTitulo}>Portada Winemaker's</Text>
            <Text style={ styles.cardDescricao}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
          </View>
        </View>

        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ imgVinhoEspecial } />
          <View style={ styles.cardBoxDescricao}>
            <Text style={ styles.cardTitulo}>Elvio Cogno Ravera Barolo</Text>
            <Text style={ styles.cardDescricao}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
          </View>
        </View>
      </View>
  );
}