import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, View, Text, Image, ImageProps } from "react-native";

import fundo from '../../../assets/fundo-xcloud.png';
import xcloud from '../../../assets/xcloud-2.png';
import { styles } from "./styles";


export default function Cloud() {
  return(
    <ImageBackground
      source={ fundo }
      style={ styles.imgContainer }
    >
      <View style={ styles.container }>
        <Text style={ styles.title }>
          Xbox CLoud Gaming
        </Text>
        <Text style={ styles.text }>
        O jogo na nuvem tem muito em comum com a transmissão de vídeos. Essencialmente, o servidor de jogos em nuvem executa um jogo e transmite um vídeo do jogo para você. Suas ações de entrada de teclado, mouse e controlador são enviadas pela rede para o servidor de jogos na nuvem.
        </Text>
        <Image
          source={xcloud}
          style={ styles.img }
        />
      </View>
    </ImageBackground>
  )
}