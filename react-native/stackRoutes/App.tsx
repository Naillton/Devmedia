import React from "react";
import { StatusBar } from "expo-status-bar";

import { Background } from "./src/component/Background";
import { Routes } from "./src/routes";

export default function App(){
  return (
    <Background>
      <StatusBar style="dark"/>
      <Routes />
    </Background>
  )
}