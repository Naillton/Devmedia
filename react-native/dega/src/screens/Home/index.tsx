import React from "react";
import { View, ImageBackground, Text } from "react-native";

const imgBack = { uri: "https://www.vinicolaaurora.com.br/images/website/visite.jpg"};
import { styles } from './styles';

export function Home() {
  return(
    <ImageBackground
      source={ imgBack }
      imageStyle={{ opacity: 0.4 }}
      style={ styles.containerImg }
    >
      <View>
        <Text style={ styles.title }>
            Adega Preferida
        </Text>
        <Text style={ styles.text }>
            Aqui voce encontra os melhores vinhos do Brasil.
        </Text>
      </View>
    </ImageBackground>
  );
}