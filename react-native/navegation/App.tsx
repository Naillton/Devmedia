import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './src/screens/Home';
import { Content } from './src/screens/Content';

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    // existem 3 tipos de navegacao 
    // tab navegation caracterizada por exibir abas na parte inerior da tela
    // drawer navigatio que exibe um menu lateral que pode ser acessado ao puxar a tela da esquerda para a direita
    // stack navigation possui por padrão uma barra de titulo e um botao para voltar a tela anterior
    // para instalar a biblioteca de alguma das nevegacoes basta usar @react-navigation/tipo_de_navegacao
    // Ex: @react-navigation/bottom-tabs
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={ Home } />
        <Screen name='First Page' component={ Content } />
      </Navigator>
    </NavigationContainer>
  );
}
