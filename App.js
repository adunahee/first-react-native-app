import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
      <Header />
        <View style={styles.container}>
          <View style={{backgroundColor: 'skyblue', flexDirection: 'row'}}>
            <Text>Hello World!</Text>
          </View>
          <View>
            <Text>My name is Anthony.</Text>
          </View>
          <View>
            <Text>I am practicing so that I can make a utilitarian app for managing a kitchen.</Text>
          </View>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollView: {
    backgroundColor: 'green',
  }
});
