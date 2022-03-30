import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";

export function ReactJS() {
  return (
    <View style={ style.container }>
      <Image
        style={ style.image } 
        source={ { uri: 'https://user-images.githubusercontent.com/51785898/91357845-424c6600-e7c8-11ea-9457-53c06cf3b6ed.png' }}
      />
      <Text style={ style.text }>
        Para desenvolvimento front-end temos o react
      </Text>
    </View>
  )
}
