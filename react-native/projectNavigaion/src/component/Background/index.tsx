import React, { ReactNode } from "react";
import { View } from 'react-native';

import { style } from "./styles";

type Props = {
    children: ReactNode,
}

export function Background({ children }: Props){
  return (
    <View style={ style.container }>
      { children }
    </View>
  )
}