import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from 'react-native';

import { style } from "./styles";

export function Two(){
  return(
    <View style={ style.container }>
      <StatusBar style="dark" />
      <Text style={ style.text }>
          Segunda Tela
      </Text>
    </View>
  );
}