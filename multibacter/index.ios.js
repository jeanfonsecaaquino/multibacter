/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from './splashScreen/splashScreen'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class multibacter extends Component {
  render() {
    return (
      <SplashScreen/>
    );
  }
}

AppRegistry.registerComponent('multibacter', () => multibacter);
