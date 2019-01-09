import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';

class App extends Component {
  componentWillMount(){
    firebase.InitalizeApp({
      apiKey: "AIzaSyDKmmx6Lq9OrK3UvmJJr7953VzvT7BFfTM",
      authDomain: "authentication-f5dec.firebaseapp.com",
      databaseURL: "https://authentication-f5dec.firebaseio.com",
      projectId: "authentication-f5dec",
      storageBucket: "authentication-f5dec.appspot.com",
      messagingSenderId: "860431425258"
    });
  }
  render(){
    return (
      <View>
        <Header headerText="Authenticaion"></Header>
        <Text> An app</Text>
      </View>
    );
  }
}

export default App;