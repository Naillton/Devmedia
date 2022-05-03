import React, { useEffect, useState } from "react";
import { 
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";

export default function Input() {
  const [ value, setValue ] = useState('');
  const [ array, setArray ] = useState([]);
  const [ checked, setChecked ] = useState([]);

  const List = (value: string) => {
    setArray((prevValue) => {
      return [
        ...prevValue,
        value
      ];
    });
    Keyboard.dismiss();
    setValue('');
  }

  const delList = () => {
    setArray([]);
  }

  const backgroundFunc = (index) => {
    return checked.includes(index) ? '#00FF00' : '#A020F0';
  };

  const rebornColor = (index) => {
    if ( checked.includes(index)){
      setChecked(checked.filter(( list ) => list !== index));
    }else {
       setChecked([...checked, index]);
    }
  }

  return(
    <View style={ styles.list }>
      <View style={ styles.container }>
        <TextInput
          placeholder="Tasks"
          textAlign="center"
          keyboardType="default"
          style={ styles.input }
          maxLength={ 200 }
          value={ value }
          onChangeText={ setValue }
        />
        <TouchableOpacity
          activeOpacity={ 0.6 }
          style={ styles.btn }
          onPress={ () => List(value) }
        >
          <View style={ styles.cont }>
            <Ionicons name="ios-add-circle-outline" size={36} color="black" />
          </View>  
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ 0.6 }
          style={ styles.btnDel }
          onPress={ delList }
        >
          <View style={ styles.cont }>
            <Ionicons name="close" size={24} color="black" />
          </View>  
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={ false }
      >
        <View style={ styles.scroll }>
          {
            array.map((item, index) => (
              <TouchableOpacity
                key={ index }
                style={[ styles.check, { backgroundColor: backgroundFunc(index) } ]}
                activeOpacity = { 0.8 }
                onPress = {() => rebornColor(index) }
              >
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}