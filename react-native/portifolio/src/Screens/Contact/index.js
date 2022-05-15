import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button';
import { AntDesign } from '@expo/vector-icons';
import Appstyles from './styles.scss';
import Linear from '../../Components/LinearGradient';

export default function Contact() {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home');
  }

  return(
    <Linear>
      <View style={ Appstyles.container }>
        <Text style={ Appstyles.title }>Que tal dar uma olhada nos meus conteúdos ?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={ Appstyles.touch }
          onPress={() => { Linking.openURL('https://github.com/Naillton')}}
        >
          <AntDesign name="github" size={30} color="black" />
          <Text style={ Appstyles.text }>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={ Appstyles.touch }
          onPress={() => { Linking.openURL('https://www.linkedin.com/in/nailton-junior-6620951b1/')}}
        >
          <AntDesign name="linkedin-square" size={30} color="black" />
          <Text style={ Appstyles.text }>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={ Appstyles.touch }
          onPress={() => { Linking.openURL('https://www.instagram.com/nailtonjunior2/')}}
        >
          <AntDesign name="instagram" size={30} color="black" />
          <Text style={ Appstyles.text }>Instagram</Text>
        </TouchableOpacity>
        <Button
          title="Home"
          onPress={ handleHome }
        />
      </View>
    </Linear>
  );
}