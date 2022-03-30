import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { JS } from "../screens/JS";
import { ReactJS } from "../screens/React";
import { Node } from "../screens/Node";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
      <Navigator>
        <Screen
          name="JS"
          component={ JS }
        /> 
        <Screen
          name="React"
          component={ ReactJS }
        /> 
        <Screen
          name="Node"
          component={ Node }
        /> 
      </Navigator>
  )
}
