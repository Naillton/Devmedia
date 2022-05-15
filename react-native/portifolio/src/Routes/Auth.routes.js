import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Contact from "../Screens/Contact";
import Home from "../Screens/Home";
import Project from '../Screens/Project';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={ Home }
      />
      <Screen
        name="Contact"
        component={ Contact }
      />
      <Screen
        name="Project"
        component={ Project }
      />
    </Navigator>
  );
}