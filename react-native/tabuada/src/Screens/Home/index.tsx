import React, { useState, useEffect } from "react";
import { 
    View, 
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonTabuada } from "../../components/Button";
import { styles } from "./styles";

const image = 'https://thumbs.dreamstime.com/b/young-female-teacher-math-lesson-blackboard-classroom-pointer-showing-board-vector-illustration-97731499.jpg';
const min = 1;
const max = 10;

export function Home(){
  const [multiplicador, setMultiplicador] = useState(1);
  const [multiplicando, setMultiplicando] = useState(1);
  const [valor, setValor] = useState('');

  const navigation = useNavigation<any>();

  const ResultCorrect = () => {
    if (multiplicador * multiplicando === Number(valor)){
      navigation.navigate('Correta');
    } else {
      navigation.navigate('Falsa');
    }
  }

  useEffect(() => {
    setInterval(() => {
      const multiplicator = (min: number, max: number) => {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        result === 0 ? setMultiplicador(1) : setMultiplicador(result);
      };
      const multiplicand = (min: number, max: number) => {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        result === 0 ? setMultiplicando(1) : setMultiplicando(result);
      };
      multiplicator(1, 10);
      multiplicand(1, 10);
    }, 20000);
  }, []);

  return(
    <ImageBackground
      source={ { uri: image } }
      style={ styles.container }
      resizeMode = "cover"
    >
    <View style={ styles.containerCount }>
        <Text style={ styles.texto }>DUVIDO VOCÊ ACERTAR!</Text>
        <View style={ styles.count }>
            <Text style={ styles.text }>{ multiplicador }</Text>
            <Text style={ styles.text }>X</Text>
            <Text style={ styles.text }>{ multiplicando }</Text>
            <Text style={ styles.text }>=</Text>
            <TextInput
              placeholder="Result"
              textAlign="center"
              keyboardType="number-pad"
              style={ styles.input }
              value={ valor }
              onChangeText={ setValor }
            />
        </View>
        <View style={ styles.contBtn }>
          <TouchableOpacity
            activeOpacity={ 0.8 }
            style={ styles.btnResponse }
            onPress={ ResultCorrect }
          >
            <Text style={ styles.textBtn }>Responder</Text>
          </TouchableOpacity>
        </View>
        </View>
        <KeyboardAvoidingView behavior="padding" style={ styles.Avoid }>
          <ButtonTabuada />
        </KeyboardAvoidingView>
        </ImageBackground>
  );
} 