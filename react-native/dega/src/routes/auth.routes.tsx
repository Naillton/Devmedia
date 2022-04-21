import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';

import { Home } from "../screens/Home";
import { Catalogo } from "../screens/Catalogo";
import { Contato } from "../screens/Contato";

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#5e2129",
        tabBarInactiveBackgroundColor: "#762933",
        tabBarShowLabel: false,
      }}
    >
      <Screen 
        name="Home"
        component={ Home }
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="home" size={24} color="black" />
          }
        }}
      />
      <Screen 
        name="Catalogo"
        component={ Catalogo }
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="print" size={24} color="black" />
          }
        }}
      />
      <Screen 
        name="Contato"
        component={ Contato }
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="mobile-phone" size={24} color="black" />
          }
        }}
      />
    </Navigator>
  )
}