import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Linear from '../../Components/LinearGradient';
import Img from "../../Components/Img";
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Button from '../../Components/Button';
import Appstyles from './styles.scss';

export default function Home() {
  const navigation = useNavigation();

  const handleContact = () => {
    navigation.navigate('Contact');
  }

  const handleProject = () => {
    navigation.navigate('Project');
  }

  return(
    <Linear>
      <ScrollView
        showsVerticalScrollIndicator = { false }
      >
        <View style={ Appstyles.container }>
          <Button
            title="Contact"
            onPress={ handleContact }
          />
          <Button
            title="Projects"
            onPress={ handleProject }
          />
        </View>
        <Img />
        <About />
        <View style={ Appstyles.contSkills }>
          <Skills />
        </View>
      </ScrollView>
    </Linear>
  );
}