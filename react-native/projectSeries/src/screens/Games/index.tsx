import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, ScrollView } from "react-native";

import forza from '../../../assets/jogo-3.png';
import cyber from '../../../assets/jogo-2.png';
import halo from '../../../assets/jogo-4.png';
import { styles } from "./styles";

export default function Games(){
  return(
    <ScrollView>
        <View style={ styles.container }>
        <StatusBar style="auto" />
        <Text style={ styles.title }>
            Jogos em 4K 
        </Text>
        <Text style={ styles.text }>Para os nossos consoles temos jogos em 4K</Text>
        <ImageBackground
            resizeMode="contain"
            source={ forza }
            style={ styles.backImg }
        >
            <View style={ styles.containerText }>
            <Text style={ styles.textGame}>Forza Horizon</Text>
            </View>
        </ImageBackground>
        <Text style={ styles.text }>Sua Aventura Definitiva de Horizon o aguarda! Explore as paisagens do mundo aberto vibrante e em constante evolução do México, com uma ação de direção divertida e ilimitada em centenas dos melhores carros do mundo.</Text>
        <ImageBackground
            source={ cyber }
            style={ styles.backImg }
        >
            <View style={ styles.containerText }>
            <Text style={ styles.textGame}>Cyber Punk 2077</Text>
            </View>
        </ImageBackground>
        <Text style={ styles.text }>Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado na megalópole de Night City, onde você joga como um mercenário cyberpunk</Text>
        <ImageBackground
            source={ halo }
            style={ styles.backImg }
        >
            <View style={ styles.containerText }>
            <Text style={ styles.textGame}>Halo 5</Text>
            </View>
        </ImageBackground>
        <Text style={ styles.text }>Halo é uma franquia de jogos de tiro em primeira pessoa de ficção científica militar produzida pela 343 Industries, subsidiária da Xbox Game Studios. A trama da série dos jogos gira em torno de uma guerra interestelar entre a humanidade e uma aliança teocrática alienígena conhecida como Covenant.</Text>
        </View>
    </ScrollView>
  )
}