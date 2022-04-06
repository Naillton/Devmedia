import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

export default function TelaHome(props: { navigation: { navigate: (arg0: string) => void; }; }){
  return(
    <View style={ styles.container }>
      <Text style={ styles.text }>Pagina Home</Text>
      <TouchableOpacity 
        onPress={() => { props.navigation.navigate('Descrição')}}      
        style={ styles.btn }>
        <Text style={ styles.text}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  )
}
