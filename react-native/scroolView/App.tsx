import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Img from './src/components/Image';
import Letters from './src/Letters/LetterMusic';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar style="auto" />
      <Img />
      <Letters />
    </View>
  );
}
