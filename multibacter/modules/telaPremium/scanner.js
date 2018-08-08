import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Linking,
    Vibration,
    Dimensions,
    Button,
    AsyncStorage
} from 'react-native';
import Camera from 'react-native-camera';
import TextoLogo from '../textoLogo/textoLogo'

export default class Scanner extends Component {

    constructor(props) {
        super(props);
        this.state = { cameraType: Camera.constants.Type.back, codigoValidado: false };
    }

    handleBarCodeRead(e) {
        Vibration.vibrate();
        return fetch(global.urlBackend + "/qrcode/" + e.data).then((response) => {
            return response.json();
        }).then((responseJson) => {
            if (responseJson.mensagem === "Qr Code Valido") {
                this.setState({ codigoValidado: true });
                AsyncStorage.setItem("multibacterPremium","multibacterPremium");
                this.props.navigation.navigate("Home")
            } else {
                alert("Qr code Invalido");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        const renderizarCamera = () => {
            return (
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 10 }}>SEJA PREMIUM</Text>
                    <Text style={{ fontSize: 15, color: 'white', marginTop: 10, textAlign: 'center' }}>APROXIME SEU CELULAR NO LEITOR QR E TENHA TODOS OS CONTEUDOS DISPONIVEIS</Text>
                    <View style={styles.rectangleContainer}>
                        <Camera style={styles.camera} type={this.state.cameraType} onBarCodeRead={this.handleBarCodeRead.bind(this)}>
                            <View style={styles.rectangleContainer}>
                                <View style={styles.rectangle} />
                            </View>
                        </Camera>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.logo}>
                <TextoLogo />
                {renderizarCamera()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#9ead35"
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent',
    },
});
