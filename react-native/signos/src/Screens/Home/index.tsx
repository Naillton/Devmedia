import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../../components/Header";
import List from "../../components/List";

export function Home(){
  return(
    <ScrollView
      showsVerticalScrollIndicator = { false }
      style={{ width: "100%"}}
    >
      <Header />
      <List />
    </ScrollView>
  )
}