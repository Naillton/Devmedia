import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";

export function One() {
  return (
    <View style={ style.container }>
      <Text style={ style.textTitle }>A historia de Darth Vader</Text>
      <Image
        style={ style.image }
        source={{ uri: 'https://sm.ign.com/t/ign_br/news/o/obi-wan-ke/obi-wan-kenobi-first-look-at-darth-vader-revealed_hsrc.h720.jpg'}}
      />
      <Text style={ style.text }>Primeira trilogia de filmes</Text>
    </View>
  )
}