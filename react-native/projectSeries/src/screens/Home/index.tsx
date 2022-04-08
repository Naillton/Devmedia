import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable } from "react-native";

import logo from '../../../assets/logo.png';
import consoleOne from '../../../assets/console-1.png';
import jogoOne from '../../../assets/jogo-1.png';
import xOne from '../../../assets/xcloud-1.png';
import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateToGames() {
    navigation.navigate("Games");
  }

  function handleNavigateToConsole() {
    navigation.navigate("Console");
  }

  function handleNavigateToCloud() {
    navigation.navigate("Cloud");
  }

  return(
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Image source={ logo } style={ styles.baseImg }/>
      <Text style={ styles.title }>Xbox</Text>
      <Text style={ styles.subtitle }>Console feito pela a mircrosoft com jogos exclusivos e incriveis</Text>
      <View style={ styles.containerImg }>
        <Pressable 
          style={ styles.btn }
          onPress={ handleNavigateToConsole }
        >
            <Image source={ consoleOne } style={ styles.img} />
            <Text style={ styles.btnText }>Conheça os detalhes</Text>
        </Pressable>
        <Pressable 
          onPress={ handleNavigateToGames }
          style={ styles.btn }
        >
            <Image source={ jogoOne } style={ styles.img} />
            <Text style={ styles.btnText }>Conheça os jogos</Text>
        </Pressable>
        <Pressable
          onPress={ handleNavigateToCloud }
          style={ styles.btn }
        >
            <Image source={ xOne } style={ styles.img} />
            <Text style={ styles.btnText }>Conheça o XCloud</Text>
        </Pressable>
      </View>
    </View>
  )
}