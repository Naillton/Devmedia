import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Header } from "../Header";
import { styles } from "./styles";

export function Home(){
  const [ min, setMin ] = useState('');
  const [ max, setMax ] = useState('');
  const [ number, setNumber ] = useState(0);

  function gerarNumero(){
    const numero = Math.floor( Math.random() * (Number(min) + Number(max)))
    numero === 0 ? setNumber(1) : setNumber(numero)
  }

    return(
        <ScrollView>
          <View style={ styles.container }>
          <Header />
          <Text style={ styles.title }>Sorteando Numeros</Text>
          <TextInput
            placeholder="Min Number"
            textAlign="center"
            keyboardType="number-pad"
            value={ min }
            onChangeText={ setMin }
            style={ styles.input }
            focusable={ true }
          />

          <TextInput
            placeholder="Max Number"
            textAlign="center"
            keyboardType="number-pad"
            value={ max }
            onChangeText={ setMax }
            maxLength={6}
            style={ styles.input }
            focusable={ true }
          />

          <View style={ styles.containerSort}>
            <Text>{ number }</Text>
          </View>
          <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ gerarNumero }
            style={ styles.btn }
          >
            <Text>Sortear</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    )
}