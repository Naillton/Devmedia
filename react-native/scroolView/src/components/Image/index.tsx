import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

export default function Img(){

  return(
    <View style={ styles.container }>
      <Image
        style={ styles.image }
        source={{ uri: 'https://i.pinimg.com/originals/63/4c/e0/634ce06eba520168a19998dabceec232.png'}}
      />
    </View>
  )
}