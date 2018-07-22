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
                tela: "TelaSoja",
                width: 70,
                height: 70
            },
            iconeMilho: {
                imagem: require("../../assets/icone_milho.png"),
                tela: "TelaMilho",
                width: 45,
                height: 70
            },
            iconeCana: {
                imagem: require("../../assets/icone_cana.png"),
                tela: "TelaCana",
                width: 70,
                height: 70
            },
            iconeAlgodao: {
                imagem: require("../../assets/icone_algodao.png"),
                tela: "TelaAlgodao",
                width: 80,
                height: 75
            }
        };

        const imagem = icones[this.props.icone].imagem;
        const tela = icones[this.props.icone].tela;
        const widthIcon = icones[this.props.icone].width;
        const heightIcon = icones[this.props.icone].height;
        return (
            <View style={styles.estiloCard}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate(tela) }}>
                    <Image style={{ width: widthIcon, height: heightIcon }} source={imagem} />
                </TouchableOpacity>
            </View>
        );
    }
}


