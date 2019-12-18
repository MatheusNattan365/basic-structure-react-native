import React, { useEffect } from 'react';
import {
    AsyncStorage,
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet
} from 'react-native';

// Screen with function component only
export default function AuthLoading({navigation}) {
    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        _bootstrapAsync();
    });
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log(navigation, userToken)
        navigation.navigate(userToken ? 'App' : 'Auth');
    };
    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});