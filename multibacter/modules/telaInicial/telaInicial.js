import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';

import Card from './card'
import TextoLogo from '../textoLogo/textoLogo'

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
const screenHeightHalf = screenHeigth / 2;
const screenWidthHalf = screenWidth / 2;
const PERCENTUAL_HEIGTH = 32;
const PERCENTUAL_WIDTH = 38;
const screenCenterHeigh = (screenHeigth * PERCENTUAL_HEIGTH) / 100;
const screenCenterWidth = (screenWidth * PERCENTUAL_WIDTH) / 100;


export default class TelaInicial extends Component {
    render() {
        return (
            <View style={styles.viewColumn} >
                <TextoLogo screenWidth={screenWidth} />
                <Image source={require("../../assets/logo.png")} style={styles.styleLogo} />
                <View style={styles.viewRow}>
                    <View style={styles.viewColumn}>
                        <Card corFundo={"#f4ba41"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeSoja"} navigation={this.props.navigation} />
                        <Card corFundo={"#3a281e"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeAlgodao"} navigation={this.props.navigation} />
                    </View>
                    <View style={styles.viewColumn}>
                        <Card corFundo={"#9ead35"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeMilho"} navigation={this.props.navigation} />
                        <Card corFundo={"#e76632"} width={screenWidthHalf} height={screenHeightHalf} icone={"iconeCana"} navigation={this.props.navigation} />
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
        width: 90, height: 90
    }
});

