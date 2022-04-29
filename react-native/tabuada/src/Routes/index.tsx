import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./Auth.Routes";

export function Routes() {
  return(
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}