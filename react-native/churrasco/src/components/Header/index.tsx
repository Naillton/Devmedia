import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const churrasco = { uri: "https://classic.exame.com/wp-content/uploads/2020/08/site-3.jpg?quality=70&strip=info&w=750"};

export function Header() {
  return(
    <View style={ styles.container }>
       <Image source={churrasco} style={ styles.img } />
       <View style={ styles.containerText }>
         <Text style={ styles.title}>CHURRASCO EM CASA</Text>
         <Text style={ styles.text }>Calculando a comida e a bebida</Text>
       </View>
    </View>
  );
}