import React from "react";
import { View, Text } from 'react-native';

import { ImageView } from "../../component/Image";
import { styles } from "./styles";

export function Contato() {
  return(
    <View style={ styles.container }>
      <ImageView />
      <Text style={ styles.text }>
        Doctor Stephen Vincent Strange
      </Text>
      <Text>
        Contato: 99 99999-9999
      </Text>
    </View>
  );
}