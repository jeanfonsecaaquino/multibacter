/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RootStack from './navigator';

export default class Multibacter extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

AppRegistry.registerComponent('multibacter', () => Multibacter);
