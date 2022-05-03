import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const cat = { uri: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"};

export function Cat() {
  return(
    <View style={ styles.container }>
      <Image source={ cat } style={ styles.img } />
      <Text style={ styles.text }>Gato</Text>
    </View>
  )
}