import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Cloud from '../screens/cloud';
import Console from '../screens/Console';
import Games from '../screens/Games';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator>
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Cloud"
        component={Cloud}
      />
      <Screen 
        name="Console"
        component={Console}
      />
      <Screen 
        name="Games"
        component={Games}
      />        
    </Navigator>
  )
}