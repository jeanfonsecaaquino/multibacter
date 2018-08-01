import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';

import Card from './card'
import TextoLogo from '../textoLogo/textoLogo'

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
const PERCENTUAL_HEIGTH = 50;
const PERCENTUAL_WIDTH = 50;
const screenCenterHeigh = (screenHeigth * PERCENTUAL_HEIGTH) / 100;
const screenCenterWidth = (screenWidth * PERCENTUAL_WIDTH) / 100;


export default class TelaInicial extends Component {

    render() {
        return (
            <View style={styles.viewColumn} >
                <TextoLogo estilo={{flexBasis : '13%'}}/>
                <Image source={global.logo} style={styles.styleLogo} />
                <View style={styles.viewRow}>
                    <View style={styles.viewColumn}>
                        <Card corFundo={global.corSoja} icone={"iconeSoja"} navigation={this.props.navigation} />
                        <Card corFundo={global.corAlgodao} icone={"iconeAlgodao"} navigation={this.props.navigation} />
                    </View>
                    <View style={styles.viewColumn}>
                        <Card corFundo={global.corMilho} icone={"iconeMilho"} navigation={this.props.navigation} />
                        <Card corFundo={global.corCana} icone={"iconeCana"} navigation={this.props.navigation} />
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TelaScanner')}} style={{backgroundColor : global.premiumBackgroundButton, flex: 1, flexDirection: 'row' , flexBasis : '13%', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={global.premium} style={{width : 45, height : 55}}/>
                    <Text style={{color : 'white', marginLeft : 10}}>SEJA PREMIUM</Text>
                </TouchableOpacity>
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
        flexDirection: "row", 
        flexBasis : '74%'
    },
    viewColumn: {
        flex: 1,
        flexDirection: "column"
    },
    styleLogo: {
        zIndex: 1,
        marginTop : screenCenterHeigh - 45,
        position : 'absolute',
        alignSelf : 'center',
        width: 90, height: 90
    }
});

