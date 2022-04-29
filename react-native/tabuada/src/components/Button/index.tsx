import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";

export function ButtonTabuada(){

  const navigation = useNavigation<any>();

  const handleClickTabuada = () => {
    navigation.navigate('Tabuada');
  }

  return(
    <View>
      <TouchableOpacity
        activeOpacity={ 0.8 }
        style={ styles.btn }
        onPress={ handleClickTabuada }
      >
        <Text>Ver Tabuada</Text>
      </TouchableOpacity>
    </View>
  )
}

export function ButtonHome(){

  const navigation = useNavigation<any>();

  const handleClickHome = () => {
    navigation.navigate('Home');
  }

  return(
    <View>
      <TouchableOpacity
        activeOpacity={ 0.8 }
        style={ styles.btnH }
        onPress={ handleClickHome }
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export function ButtonOneMore(){

  const navigation = useNavigation<any>();

  const handleOneMore = () => {
    navigation.navigate('Home');
  }

  return(
    <View>
      <TouchableOpacity
        activeOpacity={ 0.8 }
        style={ styles.btnOne }
        onPress={ handleOneMore }
      >
        <Text>Tente Outra</Text>
      </TouchableOpacity>
    </View>
  )
}