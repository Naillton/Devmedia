import React from "react";
import { View, Image, Text } from 'react-native';

import Hero from '../../assets/img1.png';
import { styles } from "./style";

export default function Topo(){
  return (
    <View style={ styles.topoContainer }>
      <Image
        source={ Hero }
        style={ styles.topoImg }
      />
       <Text style={ styles.topoText }>
        Nitendo Switch
      </Text>
    </View>
  );
}