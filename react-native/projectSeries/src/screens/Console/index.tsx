import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from "react-native";

import firstConsole from "../../../assets/console-1.png";
import secondConsole from "../../../assets/console-2.png";
import { styles } from "./styles";


export default function Console() {
  return(
    <View style={ styles.container}>
      <StatusBar style="auto" />
      <Image source={ firstConsole } style={ styles.img}/>
      <Text style={ styles.title}>
        XBOX SERIES S
      </Text>
      <Text style={styles.text}>
        Primeiro console da série desenvolvido pela microsoft
      </Text>
      <Image source={ secondConsole } style={ styles.img}/>
      <Text style={ styles.title}>
        XBOX SERIES X
      </Text>
      <Text style={styles.text}>
        Segundo console da série desenvolvido pela microsoft
      </Text>
    </View>
  )
}