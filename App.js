/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';
import BossScreen from './BossScreen';


const AppNavigator = createStackNavigator({
  Boss: { screen: BossScreen }
}, {
  initialRouteName: "Boss"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
