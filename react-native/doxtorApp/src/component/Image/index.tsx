import React from "react";
import { View, Image } from 'react-native';
import { styles } from "./styles";

const imgOne = { uri: "https://wallpapercave.com/wp/wp4531254.jpg" };
const imgTwo = { uri: "https://comunidadeculturaearte.com/wp-content/uploads/2022/02/Doctor-Strange-in-the-Multiverse-of-Madness-Sam-Raimi-Wanda-Maximoff-Elizabeth-Olsen-trailer-spider-man-1024x720.jpg" };

export function ImageView() {
  return(
    <View style={ styles.container }>
      <Image source={ imgOne } style={ styles.img } />
      <Image source={ imgTwo } style={ styles.imgPerf } />
    </View>
  );
}