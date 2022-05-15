import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Appstyles from './styles.scss';

export default function Button({ title, ...rest }) {
  return(
    <RectButton
      style={ Appstyles.btn }
      activeOpacity={0.7}
      {...rest}
    >
      <Text
        style={ Appstyles.text }
      >
        { title }
      </Text>
    </RectButton>
  );
}