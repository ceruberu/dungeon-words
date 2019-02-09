import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
// import fs from 'fs'
// import Papa from 'papaparse';
import mockData from './data/dungeonWords.json';
// import dungeonSprites from './data/dungeonSprites.png';
import knightIdle from './data/knightIdle.png';
import knight1 from './data/knight1.png';
import knight2 from './data/knight2.png';
import knight3 from './data/knight3.png';
import knight4 from './data/knight4.png';
import Sprite from './Sprite';

const knightFrames = [knight1, knight2, knight3, knight4];
const knightAnimations = {
  idle: [0, 1, 2, 3]
};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class BossScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Boss Raid',
  };

  render() {
    console.log("Data: ", mockData);
    return (
      <View style={styles.container}>
        <View style={styles.battle} >
          <Sprite 
            frames={knightFrames}
            animationTypes={knightAnimations}
            height={28*2}
            width={16*2}
          />
        </View>
        <View style={styles.question}>
          <Text>
            {mockData[0][0]}
          </Text>
        </View>
        <View style={styles.answers}>
          <Text>
            {mockData[0][1]}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  question: {
    textAlign: 'center'
  },
  answers: {
    textAlign: 'center'
  }
});

export default BossScreen;
