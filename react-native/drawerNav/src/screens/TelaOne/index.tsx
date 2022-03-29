import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from 'react-native';

import { style } from "./styles";

export function One(){
  return(
    <View style={ style.container }>
      <StatusBar style="dark" />
      <Text style={ style.text }>
          Primeira Tela
      </Text>
    </View>
  );
}