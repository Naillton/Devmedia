import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { object, mobile } from '../../Components/Data';
import { useNavigation } from '@react-navigation/native';

import Button from '../../Components/Button';
import Linear from '../../Components/LinearGradient';
import Appstyles from './styles.scss';

export default function Project() {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home');
  }

  return(
    <Linear>
      <View style={ Appstyles.container }>
        <Text style={ Appstyles.title }>Meus Projetos</Text>
        <Text style={ Appstyles.titleWeb }>Web</Text>
        <View style={ Appstyles.contWeb }>
          <ScrollView
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
          >
            <View style={ Appstyles.item }>
              { object.map((item,  index) => (
                <Image key={ index } source={ item } style={ Appstyles.img } />
              ))}
            </View>
          </ScrollView>
        </View>
        <Text style={ Appstyles.titleWeb }>Mobile</Text>
        <View style={ Appstyles.contWeb }>
          <ScrollView
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
          >
            <View style={ Appstyles.item }>
              { mobile.map((item,  index) => (
                <Image key={ index } source={ item } style={ Appstyles.imgMobi } />
              ))}
            </View>
          </ScrollView>
        </View>
        <Button
          title="Home"
          onPress={ handleHome }
        />
      </View>
    </Linear>
  );
}
