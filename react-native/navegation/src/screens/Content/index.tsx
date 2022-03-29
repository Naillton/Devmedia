import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from 'react-native';

import { style } from './styles';

export function Content(){
  return(
    <View style={ style.container }>
      <StatusBar style="light" />
      <Text style={ style.text }>
          Minha Pagina Inicial
      </Text>
    </View>
  );
};
