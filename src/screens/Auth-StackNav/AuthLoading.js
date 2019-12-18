import React from 'react';
import {
    AsyncStorage,
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet
} from 'react-native';

// import { Container } from './styles';

export default class AuthLoading extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
      }
    
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );

    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
