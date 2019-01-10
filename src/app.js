import firebase from 'firebase';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Spinner, Button} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state= {loggedIn: null};
  componentWillMount(){
    firebase.InitalizeApp({
      apiKey: "AIzaSyDKmmx6Lq9OrK3UvmJJr7953VzvT7BFfTM",
      authDomain: "authentication-f5dec.firebaseapp.com",
      databaseURL: "https://authentication-f5dec.firebaseio.com",
      projectId: "authentication-f5dec",
      storageBucket: "authentication-f5dec.appspot.com",
      messagingSenderId: "860431425258"
    });
    firebase.auth().onAuthStateChanged((user)=>{ 
        if(user){
          this.setState({loggedIn: true})
        } else {
          this.setState({loggedIn: false})
        }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return(<Button>Log Out</Button>);
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="large"/>
    }
}
  render(){
    return (
      <View>
        <Header headerText="Authenticaion"></Header>
        <LoginForm/>
      </View>
    );
  }
}

export default App;