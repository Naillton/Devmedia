import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./src/screens/Home";
import { Contato } from "./src/screens/Contato";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="Tela inicial" component= { Home } />
        <Screen name="Tela contato" component={ Contato } />
      </Navigator>
    </NavigationContainer>
  )
}