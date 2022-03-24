import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./style";

export default function Head(){
  return (
    <View style={ styles.headContainer }>
      <Text style={ styles.title }>Notícia do dia</Text>
    </View>
  );
}