import React from "react";
import { View, Text } from "react-native";

import Signos from "../../data";
import { styles } from "./styles";

export default function List() {
  return(
    <View>
      { Signos.map((item, index) => (
          <View style={ styles.containerList}>
            <Text style={ styles.title } key={ index }>{item.signo}</Text>
            <Text style={ styles.paragraph}>Nascidos entre: {item.dataInicio} a {item.dataFim}</Text>
          </View>
        ))
      }
    </View>
  );
}