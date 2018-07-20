/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from './telaInicial/telaInicial'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TelaInicial from './telaInicial/telaInicial';

export default class multibacter extends Component {
  render() {
    return (
      <TelaInicial/>
    );
  }
}

AppRegistry.registerComponent('multibacter', () => multibacter);
