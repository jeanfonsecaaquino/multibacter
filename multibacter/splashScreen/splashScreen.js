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
let screenHeightHalf = Dimensions.get('window').height / 2;
let screenWidthHalf = Dimensions.get('window').width / 2;
const PERCENTUAL_HEIGTH = 36;
const PERCENTUAL_WIDTH = 40;
let screenCenterHeigh = (Dimensions.get('window').height * PERCENTUAL_HEIGTH) / 100;
let screenCenterWidth = (Dimensions.get('window').width * PERCENTUAL_WIDTH) / 100;


export default class SplashScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 110
                }}>
                    <Image style={{ width: screenHeightHalf, height: 62, top: 10 }} source={require("../assets/logo_texto.png")} />
                </View>
                <Image source={require("../assets/logo.png")} style={{
                    position: 'absolute',
                    zIndex: 1,
                    bottom: screenCenterHeigh,
                    left: screenCenterWidth,
                    width: 70, height: 70
                }} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.soja}>
                            <Image style={{ width: 70, height: 70 }} source={require("../assets/icone_soja.png")} />
                        </View>
                        <View style={styles.algodao}>
                            <Image style={{ width: 70, height: 70 }} source={require("../assets/icone_algodao.png")} />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.milho}>
                            <Image style={{ width: 70, height: 70 }} source={require("../assets/icone_milho.png")} />
                        </View>
                        <View style={styles.cana}>
                            <Image style={{ width: 70, height: 70 }} source={require("../assets/icone_cana.png")} />
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    soja: {
        backgroundColor: '#f4ba41',
        width: screenWidthHalf,
        height: screenHeightHalf,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    algodao: {
        backgroundColor: '#3a281e',
        width: screenWidthHalf,
        height: screenHeightHalf,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    milho: {
        backgroundColor: '#9ead35',
        width: screenWidthHalf,
        height: screenHeightHalf,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cana: {
        backgroundColor: '#e76632',
        width: screenWidthHalf,
        height: screenHeightHalf,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        resizeMode: "center",
        flex: 1
    }
});

AppRegistry.registerComponent('multibacter', () => multibacter);


