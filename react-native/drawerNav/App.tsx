import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { One } from './src/screens/TelaOne';
import { Two } from './src/screens/TelaTwo';

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  // drawer navigation, usamos o drawer navigation quando queremos um menu lateral
  // podemos acessalo arrastando a tela para o lado ou tocando no botao de menu que ja vem com a naveagacao
  // para instalar a biblioteca usamos npm install @react-navigation/drawer e para usalo temos que fazer uma alteracao no arquivo babel.config
  /* module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'],
    };
  };
  */
  // alem de instalações pasdroes acima tive que instalar o reanimated e o gesture handler  para conseguir rodar a navegacao
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Principal" component={ One }/>
        <Screen name="Secundaria" component={ Two }/>
      </Navigator>
    </NavigationContainer>
  );
}
