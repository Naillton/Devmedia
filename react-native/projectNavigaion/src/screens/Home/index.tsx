import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";

// Obs: usar o useNavigation();

export function Home(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  return (
    <View style={ style.container }>
      <Image 
        style={ style.image }
        source={{ uri: 'https://static.wikia.nocookie.net/ptstarwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190525165732'}}
      />
      <Text style={ style.textTitle }>Você sabe qual é a orem cronologica da franquia Star Wars ?</Text>
      <Text style={ style.text }>Os principais filmes da franquia estão divididos em trilogias.
          Clique no botão a seguir para conferir
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('One')}
        style={ style.btn }
      >
        <Text>Ver 1 Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Two')}
        style={ style.btn }
      >
        <Text>Ver 2 Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Three')}
        style={ style.btn }
      >
        <Text>Ver 3 Trilogia</Text>
      </TouchableOpacity>
    </View>
  )
}