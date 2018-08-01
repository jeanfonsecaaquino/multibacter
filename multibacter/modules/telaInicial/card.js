import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
const screenHeightHalf = screenHeigth / 2;
const screenWidthHalf = screenWidth / 2;

export default class Card extends Component {
    render() {
        const styles = StyleSheet.create({
            estiloCard: {
                backgroundColor: this.props.corFundo,
                width: screenWidthHalf,
                height: screenHeightHalf,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        const icones = {
            iconeSoja: {
                imagem: global.imagemSoja,
                tela: "TelaSoja",
                width: 70,
                height: 70,
                texto : 'SOJA'
            },
            iconeMilho: {
                imagem: global.imagemMilho,
                tela: "TelaMilho",
                width: 45,
                height: 70,
                texto : 'MILHO'
            },
            iconeCana: {
                imagem: global.imagemCana,
                tela: "TelaCana",
                width: 70,
                height: 70,
                texto : 'CANA'
            },
            iconeAlgodao: {
                imagem: global.imagemAlgodao,
                tela: "TelaAlgodao",
                width: 80,
                height: 75,
                texto : 'ALGODÃO'
            }
        };

        const imagem = icones[this.props.icone].imagem;
        const tela = icones[this.props.icone].tela;
        const widthIcon = icones[this.props.icone].width;
        const heightIcon = icones[this.props.icone].height;
        const texto = icones[this.props.icone].texto;
        return (
            <TouchableOpacity style={styles.estiloCard} onPress={() => { this.props.navigation.navigate(tela) }}>
                <View >
                    <Image style={{ width: widthIcon, height: heightIcon }} source={imagem} />
                </View>
                <View style={{marginTop : 10}}>
                    <Text style={{ color: 'white' }}>{texto}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


