import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { Tabuada } from '../Screens/Tabuada';
import { Correct } from '../Screens/Correta';
import { False } from '../Screens/Falsa';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={ Home }
      />

      <Screen
        name="Tabuada"
        component={ Tabuada }
      />

      <Screen
        name="Correta"
        component={ Correct }
      />

      <Screen
        name="Falsa"
        component={ False }
      />
    </Navigator>
  )
}