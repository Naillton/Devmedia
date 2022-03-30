import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";

export function Three() {
  return (
    <View style={ style.container }>
      <Text style={ style.textTitle }>A historia de Rey</Text>
      <Image
        style={ style.image }
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Rey_-_Star_Wars.jpg/200px-Rey_-_Star_Wars.jpg'}}
      />
      <Text style={ style.text }>Terceira trilogia de filmes</Text>
    </View>
  )
}