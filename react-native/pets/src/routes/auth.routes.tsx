import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Cat } from "../screens/Cat";
import { Dog } from "../screens/Dog";

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#5F9EA0",
        headerShown: true, // por default ja vem true
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "pink",
        }
      }}
    >
      <Screen
        name="Gato"
        component={ Cat }
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="cat" size={24} color={ color } />
          }
        }}
      />

      <Screen
        name="Cachorro"
        component={ Dog }
        options={{
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="dog-side" size={24} color={ color } />
            }
          }}
      />
    </Navigator>
  );
}