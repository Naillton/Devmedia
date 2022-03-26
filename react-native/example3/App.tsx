import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold} from '@expo-google-fonts/inter';

import { Content } from './components/Content';
import { Header } from './components/header';
import { Actor } from './components/Actor';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if(!fontsLoaded){
    <AppLoading />
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Header />
        <Actor />
        <Content />
      </View>
    </ScrollView>
  );
}
