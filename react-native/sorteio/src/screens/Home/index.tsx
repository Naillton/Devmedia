import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home(){
  const [ sort, setSort ] = useState(0);

  function gerarNumero(){
    setSort(Math.floor(Math.random() * 100 + 1));
  }

  return(
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.texto }>Sorteio React</Text>
      </View>
      <View style={ styles.containerSort }>
        <Text style={ styles.textSort }>{ sort }</Text>       
      </View>
      <TouchableOpacity
        onPress={ gerarNumero }
        style={ styles.btn }
      >
        <Text style={ styles.sortear }>SORTEAR</Text>
      </TouchableOpacity>
    </View>
  );
}