import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";

export function Contato() {
  return(
      <View style={ styles.container }>
        <Text style={ styles.title }>
            Entre em contato conosco para comprar nossos produtos
        </Text>
        <View style={ styles.containerIcon }>
            <Feather name="phone-call" size={24} color="black" />
            <Text style={ styles.text }>(81) 99999-9999</Text>
        </View>
        <View style={ styles.containerIcon }>
            <Feather name="instagram" size={24} color="black" />
            <Text style={ styles.text }>vinhoCultura</Text>
        </View>
        <View style={ styles.containerIcon }>
            <Feather name="mail" size={24} color="black" />
            <Text style={ styles.text }>vinhoCultura@email.com</Text>
        </View>
        <View style={ styles.containerIcon }>
        <Feather name="home" size={24} color="black" />
            <Text style={ styles.text }>Rua: vinho do bom</Text>
        </View>
      </View>
  )
}