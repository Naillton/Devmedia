import React, { useContext } from "react";
import { 
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import MyContext from "../../context/MyContext";

import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";

export default function Input() {
  const {
    value,
    setValue,
    array,
    List,
    checked,
    setChecked,
    delList
  } = useContext(MyContext);

  const backgroundFunc = (index: any) => {
    return checked.includes(index) ? '#00FF00': '#A020F0';
  };

  const rebornColor = (index: any) => {
    if ( checked.includes(index)){
      setChecked(checked.filter(( list: any ) => list !== index));
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
            array.map((item: any, index: any) => (
              <TouchableOpacity
                key={ index }
                style={[ styles.check, { backgroundColor: backgroundFunc(index) } ]}
                activeOpacity = { 0.8 }
                onPress = {() => rebornColor(index) }
              >
                <Text
                  style={styles.item}
                >
                  {item}
                  { backgroundFunc(index) === '#00FF00' ? <Ionicons name="checkmark" size={24} color="black" /> : '' }
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}