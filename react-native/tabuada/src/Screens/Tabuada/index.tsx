import React from "react";
import { ImageBackground, View } from 'react-native';
import { styles } from "./styles";

import tabuada from '../../../assets/tabuada.jpeg';
import { ButtonHome } from "../../components/Button";

export function Tabuada() {
  return(
    <ImageBackground
      source={ tabuada }
      resizeMode="contain"
      style={ styles.container }
    >
    <ButtonHome />
    </ImageBackground>
  );
}