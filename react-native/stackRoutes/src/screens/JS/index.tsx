import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./styles";

export function JS(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  return (
    <View style={ style.container }>
      <Image
        style={ style.image } 
        source={ { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png' }}
      />
      <Text style={ style.text }>
        Veja duas tecnologias para se tornar um programador full stack web
      </Text>
      <View style={ style.btnCont }>
        <TouchableOpacity
          onPress={ () => { props.navigation.navigate('React') } }
          style={ style.btn }
        >
          <Text style={ style.textOne }>React</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { props.navigation.navigate('Node') }}
          style={ style.btn }
        >
          <Text style={ style.textOne }>Node</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
