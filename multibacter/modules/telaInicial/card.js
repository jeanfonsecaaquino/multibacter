import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Card extends Component {
    render() {
        const styles = StyleSheet.create({
            estiloCard: {
                backgroundColor: this.props.corFundo,
                width: this.props.width,
                height: this.props.height,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        const icones = {
            iconeSoja: {
                imagem: require("../../assets/icone_soja.png"),
                tela: "TelaSoja"
            },
            iconeMilho: {
                imagem: require("../../assets/icone_milho.png"),
                tela: "TelaMilho"
            },
            iconeCana: {
                imagem: require("../../assets/icone_cana.png"),
                tela: "TelaCana"
            },
            iconeAlgodao: {
                imagem: require("../../assets/icone_algodao.png"),
                tela: "TelaAlgodao"
            }
        };

        const imagem = icones[this.props.icone].imagem;
        const tela = icones[this.props.icone].tela;
        return (
            <View style={styles.estiloCard}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate(tela) }}>
                    <Image style={{ width: 70, height: 70 }} source={imagem} />
                </TouchableOpacity>
            </View>
        );
    }
}


