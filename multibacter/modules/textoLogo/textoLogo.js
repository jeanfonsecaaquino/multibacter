import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

export default class TextoLogo extends Component {
    render() {
        return (
            <View style={styles.viewTextoLogo}>
                <Image style={{ width: this.props.screenWidth, height: 70 }} source={require("../../assets/logo_texto.png")} />
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

