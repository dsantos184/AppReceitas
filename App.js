/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Lista from './src/pages/Lista';
import {Receita} from './src/pages/Receita';

const Navegador = createStackNavigator({
  Lista:
  {
    screen: Lista
  },

  Receita:
  {
    screen: Receita
  }
})

export default createAppContainer(Navegador);