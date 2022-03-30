import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { One } from "../screens/Trilogia-1";
import { Two } from "../screens/Trilogia-2";
import { Three } from "../screens/Trilogia-3";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
      <Navigator>
        <Screen 
          name="Home"
          component={ Home }
        />
        <Screen 
          name="One"
          component={ One }
        />
        <Screen 
          name="Two"
          component={ Two }
        />
        <Screen 
          name="Three"
          component={ Three }
        />
      </Navigator>
  )
}