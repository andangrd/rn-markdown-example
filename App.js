/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Markdown from 'react-native-markdown-package';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Markdown styles={styles.markdown} >
          # This is Heading 1{'\n\n'}
          ## This is Heading 2{'\n\n'}
          1. List1 {'\n'}
          2. List2 {'\n'} 
          {'\t'}1. sublist1{'\n'}
          {'\t'}description sublist1.{'\n'}
          {'\t'}2. sublist2{'\t\t'}{'\n'}
          * List3{'\n'}
          * List4{'\n'}
          {'\t'}1. **bold text** {'\n'}
          {'\t'}2. this line contain * and should not be a new sublist{'\t\t'}{'\n'}
          5.  Last list{'\n\n'}
          Some *really* basic **Markdown**.{'\n\n'}


          ## this is header {'\n\n\n\n'}
          {'this is _italic_ '}
          {'this is **strong**'}

          {'\n\n'}
          | # | Name   | Age |{'\n'}
          |---|--------|-----|{'\n'}
          | 1 | John   | 19  |{'\n'}
          | 2 | Sally  | 18  |{'\n'}
          | 3 | Stream | 20  |{'\n'}
        </Markdown>
      </View>
    );
  }
}

const styles = {
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
  markdown: {
    heading1: {
      color: 'red'
    },
    heading2: {
      color: 'green'
    },
    strong: {
      color: 'blue'
    },
    em: {
      color: 'cyan'
    },
    text: {
      color: 'magenta',
    }
  }
};
