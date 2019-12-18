import React from 'react';

import {
    AsyncStorage,
    Button,
    StyleSheet,
    View,
  } from 'react-native';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Sign in!" onPress={this._signInAsync} />
          <Button title="Sign up!" onPress={this._signUp} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
    _signUp = () => {
      this.props.navigation.navigate('SignUp');
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
