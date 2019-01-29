import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/Header.js';
import Instructions from './components/Instructions.js';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      number: 0,
    }
  }

  handleGreeting = (event) => {
    this.setState({
      number: this.state.number ++
    })
  }


  render() {
    return (
      <View>
        <Header />
        <View style={styles.container}>
            <Text style={{ backgroundColor: 'skyblue', flexDirection: 'row' }}>Hello World!</Text>
            <Text>My name is Anthony.</Text>
            <Text>I am practicing so that I can make a utilitarian app for managing a kitchen.</Text>
        </View>
        <Instructions />
        <View>
          <Text>
            You have greeted the world {this.state.number}.
          </Text>
        </View>
      </View>

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
});
