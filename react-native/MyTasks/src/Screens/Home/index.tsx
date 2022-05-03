import React from "react";
import { View } from 'react-native';

import Header from "../../components/Header";
import Input from "../../components/Input";
import { styles } from "./styles";

export default function Home() {
  return(
    <View style={ styles.container }>
      <Header />
      <Input />
    </View>
  )
}