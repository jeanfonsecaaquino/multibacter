import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
const screenHeightHalf = screenHeigth / 2;
const screenWidthHalf = screenWidth / 2;
const PERCENTUAL_HEIGTH = 36;
const PERCENTUAL_WIDTH = 40;
const screenCenterHeigh = (screenHeigth * PERCENTUAL_HEIGTH) / 100;
const screenCenterWidth = (screenWidth * PERCENTUAL_WIDTH) / 100;
import Card from './card'


export default class TelaInicial extends Component {
    render() {
        return (
            <View style={styles.viewColumn}>
                <View style={styles.viewTextoLogo}>
                    <Image style={{ width: screenHeightHalf, height: 62, top: 10 }} source={require("../assets/logo_texto.png")} />
                </View>
                <Image source={require("../assets/logo.png")} style={styles.styleLogo} />
                <View style={styles.viewRow}>
                    <View style={styles.viewColumn}>
                        <Card corFundo={"#f4ba41"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeSoja"} />
                        <Card corFundo={"#3a281e"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeAlgodao"} />
                    </View>
                    <View style={styles.viewColumn}>
                        <Card corFundo={"#9ead35"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeMilho"} />
                        <Card corFundo={"#e76632"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeCana"} />
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: "center",
        flex: 1
    },
    viewRow: {
        flex: 1,
        flexDirection: "row"
    },
    viewColumn: {
        flex: 1,
        flexDirection: "column"
    },
    styleLogo: {
        position: 'absolute',
        zIndex: 1,
        bottom: screenCenterHeigh,
        left: screenCenterWidth,
        width: 70, height: 70
    },
    viewTextoLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110
    }
});

