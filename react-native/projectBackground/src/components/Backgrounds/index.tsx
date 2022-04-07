import React from "react";
import { ImageBackground, View, Text } from "react-native";

import raposa from '../../assets/raposa.png';
import flor from '../../assets/design-toxico.png';
import butterfly from '../../assets/aterrissagem.png';
import { styles } from "./syles";

export default function Backs() {
  return (
    <View style={styles.container}>
      <Text style={ styles.title }>
        Top Fotografias
      </Text>
      <Text style={ styles.text }>Candidtos a premio de fotografia em 2021</Text>
      <ImageBackground style={ styles.imageOne} source={ raposa }>
        <View>
          <Text style={ styles.textImg }>
            A raposa da tempestade
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground style={ styles.imageOne} source={ flor }>
        <View>
          <Text style={ styles.textImg }>
            Aterrisagem de Apolo
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground style={ styles.imageOne} source={ butterfly }>
        <View>
          <Text style={ styles.textImg }>
            Aterrisagem de Apolo
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}