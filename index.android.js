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


/** Generamos archivo base para android y ios  */
import App from './app'


export default class Music extends Component {

  render() {

    return (
      
      <View style={styles.container}>

        <App />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap'
  }
});

AppRegistry.registerComponent('Music', () => Music);