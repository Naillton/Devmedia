import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from "./component/TelaHome";
import TelaDescricao from "./component/TelaDescricao";
import { StatusBar } from "expo-status-bar";

const { Navigator, Screen } = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <StatusBar style="dark"/>
      <Navigator>
        <Screen name="Home" component = { TelaHome } />
        <Screen name="Descrição" component = { TelaDescricao } />
      </Navigator>
    </NavigationContainer>
  )
};