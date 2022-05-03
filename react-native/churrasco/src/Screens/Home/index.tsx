import React from "react";
import { View } from "react-native";
import { Body } from "../../components/Body";
import { Header } from "../../components/Header";

export function Home() {
  return(
    <View>
      <Header />
      <Body />
    </View>
  )
}