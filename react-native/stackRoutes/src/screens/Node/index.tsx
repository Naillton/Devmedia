import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";

export function Node() {
  return (
    <View style={ style.container }>
      <Image
        style={ style.image } 
        source={ { uri: 'https://blog.rocketseat.com.br/content/images/2018/12/nodejs-vale-a-pena-vantagens.jpg' }}
      />
      <Text style={ style.text }>
        Para desenvolvimento backend temos o NodeJS
      </Text>
    </View>
  )
}