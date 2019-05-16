import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Conversation from './src/pages/Conversation';
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Conversation />
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
});
