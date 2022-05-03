import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const cat = { uri: "https://i0.wp.com/petcaramelo.com/wp-content/uploads/2021/06/Dogo-Argentino4.jpg?resize=663%2C497&ssl=1"};

export function Dog() {
  return(
    <View style={ styles.container }>
      <Image source={ cat } style={ styles.img } />
      <Text style={ styles.text }>Dog</Text>
    </View>
  )
}