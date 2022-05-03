import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";

export function Body() {
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Vai fazer um churrasco mas não sabe o que comprar ?
      </Text>
      <Text style={ styles.text }>
        Final de semana chegando e vem aquela vontade de fazer
        um churrasco. Nessa hora bate uma duvida da quantidade
        de carne e de bebidas que cada convidado vai consumir.
        Veja abaixo uma média do consumo por pessoa.
      </Text>
      <View style={ styles.containerAll}>
        <View style={ styles.containerFood }>
          <MaterialCommunityIcons name="emoticon" size={24} color="#0000CD" />
          <Text style={ styles.textFood}>Convidado</Text>
          <Text style={ styles.textFood}>1</Text>
        </View>
        <View style={ styles.containerFood }>
        <MaterialCommunityIcons name="food-steak" size={24} color="#0000CD" />
          <Text style={ styles.textFood}>Carne</Text>
          <Text style={ styles.textFood}>400 GR</Text>
        </View>
        <View style={ styles.containerFood }>
        <MaterialCommunityIcons name="food" size={24} color="#0000CD" />
          <Text style={ styles.textFood}>Refrigerante</Text>
          <Text style={ styles.textFood}>700 ML</Text>
        </View>
        <View style={ styles.containerFood }>
        <MaterialCommunityIcons name="beer" size={24} color="#0000CD" />
          <Text style={ styles.textFood}>Cerveja</Text>
          <Text style={ styles.textFood}>4 Latas</Text>
        </View>
      </View>
    </View>
  );
}