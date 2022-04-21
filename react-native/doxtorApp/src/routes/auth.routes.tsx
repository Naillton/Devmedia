import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';

import { Home } from "../screens/Home";
import { Contato } from "../screens/Contato";

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return(
    <Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "#32CD32",
      tabBarLabelStyle: { fontSize: 15},
    }}
    >
      <Screen
        name="Home"
        component={ Home }
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="home" size={24} color={ color } />
          }
        }}
      />
      <Screen
        name="Contato"
        component={ Contato }
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="phone" size={24} color={ color } />
          }
        }}
      />
    </Navigator>
  )
}