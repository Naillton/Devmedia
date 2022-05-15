import React from 'react';
import { View, Image } from 'react-native';

import Appstyles from './styles.scss';
import url from '../../../assets/eu.jpg';

export default function Img(){
  return(
    <View style={ Appstyles.container }>
      <Image
        source={ url }
        style={ Appstyles.img }
      />
    </View>
  );
}