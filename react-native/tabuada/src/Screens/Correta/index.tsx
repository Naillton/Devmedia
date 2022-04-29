import React from "react";
import { ImageBackground, View, Text } from "react-native";

import trofeu from '../../../assets/trofeu.jpg';
import { ButtonOneMore } from "../../components/Button";
import { styles } from "./styles";

export function Correct() {
  return(
    <View style={ styles.cont }>
      <ImageBackground
        source={trofeu}
        style={styles.container}
      >
        <View>
          <Text style={styles.text}>Parabéns, você acertou!</Text>
        </View>
      </ImageBackground>
      <ButtonOneMore />
    </View>
  )
}