
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,

  ActivityIndicator,
} from 'react-native';


import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import firebase, { firebaseAuth } from './firebase'
const { FacebookAuthProvider } = firebase.auth

import { Actions } from 'react-native-router-flux'


export default class LoginView extends Component {
  
  constructor() {
		super();
		
		this.state = {
      credentials: null
		}
  }
  

  componentWillMount() {
    this._authenticateUser()
  }

  /** Apoyandonos del sdkfb, con el LoginButton trae el evento 
   * y despues AccessToken para el data = accessToken
   * 
   * despues usamos Firebase con FacebookAuthProvider y firebaseAuth
   */
  _authenticateUser = () => {
    
    this.setState({ loading: true })
    
    // AccessToken del sdkfb 
    AccessToken.getCurrentAccessToken().then( (data) => {
      if (!data) {
        this.setState({ loading: false })
        return
      }

      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)

      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        Actions.root()
      }, (error) => {
        this.setState({ loading: false })
        
        console.log("Sign In Error", error);
      });
    })

  }

  /** Metodo que reviza si hay error al autenticar, sino manda a metodo _authenticateUser */
  _handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error)
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this._authenticateUser()
    }
  }

  /**
   *  @return Image que personaliza
   */
  render() {
    return (

      <Image source={require('./background.jpg')} style={styles.container}>
        
        <Text style={styles.welcome}>
          Music por ricardolopez.computing@gmail.com
        </Text>

        <Image source={require('./logo.png')} style={styles.logo} />
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color="white"
          animating={this.state.loading} />
        
        <LoginButton
          readPermissions = {['public_profile', 'email']}
          onLoginFinished = {this._handleLoginFinished}
          onLogoutFinished = {() => alert("logout.")}/>

      </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  spinner: {
    marginVertical: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: 'white',
  }
});
