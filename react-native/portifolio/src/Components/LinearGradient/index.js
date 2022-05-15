import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Appstyles from './styles.scss';

export default function Linear({ children }) {
  return(
    <LinearGradient
      colors={['#955cff', '#7250ef', '#4d42d4', '#2035b9', '#00289e']}
      style={Appstyles.container}
    >
      { children }
    </LinearGradient>
  );
}