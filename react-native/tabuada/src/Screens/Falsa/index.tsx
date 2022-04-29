import React from "react";
import { ImageBackground, View, Text } from "react-native";

import errou from '../../../assets/errou.jpg';
import { ButtonOneMore, ButtonTabuada } from "../../components/Button";
import { styles } from "./styles";

export function False() {
  return(
    <ImageBackground
      source={errou}
      style={styles.container}
    >
      <View style={ styles.cont }>
        <Text style={styles.text}>Ops! Resposta errada que tal ver a tabuada ?</Text>
        <ButtonTabuada />
        <ButtonOneMore />
      </View>
    </ImageBackground>
  );
}