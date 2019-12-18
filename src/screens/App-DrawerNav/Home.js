import React from 'react';
import {
    AsyncStorage,
    Button,
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Home Page</Text>
          <Text>Now you can use</Text>
          <Text>DRAWERNAVIGATION</Text>
          <Text>slide to right</Text>
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
