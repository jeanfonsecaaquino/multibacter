import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class TextoLogo extends Component {
    render() {
        return (
            <View style={styles.viewTextoLogo}>
                <Image style={{ width: screenWidth, height: 70 }} source={require("../../assets/logo_texto.png")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewTextoLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110
    }
});

