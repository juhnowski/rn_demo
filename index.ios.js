/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * For experimentts install extension 'Button' - react-native-button from:
 * https://github.com/ide/react-native-button and install it:
 * npm install react-native-button --save
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  AlertIOS
} from 'react-native';
import Button from 'react-native-button';

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }
    _handlePress() {
        if (this.state.login === 'Demo') {
            res = "Logged In"
        } else {
            res = "Wrong username or password"
        }
        AlertIOS.alert(
                       'Login Result',
                       res
                       );
        console.log('Logged!');
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to DEMO!
        </Text>
        <Text style={styles.instructions}>
            To get started, input {'\n'}login:
        </Text>
        
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(login) => this.setState({login})}
            value={this.state.login}
            >
            </TextInput>
            
        <Text style={styles.instructions}>
            Password:
        </Text>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            >
            </TextInput>
            <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}>
            Login!
            </Button>
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
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
