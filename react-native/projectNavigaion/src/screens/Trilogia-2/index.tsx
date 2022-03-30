import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";

export function Two() {
  return (
    <View style={ style.container }>
      <Text style={ style.textTitle }>A historia de Luke Skywalker</Text>
      <Image
        style={ style.image }
        source={{ uri: 'https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg'}}
      />
      <Text style={ style.text }>Segunda trilogia de filmes</Text>
    </View>
  )
}