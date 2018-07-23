import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';


import TextoLogo from '../../textoLogo/textoLogo'
import TollBar from '../tollbar';
import Title from '../title';
export default class TelaAlgodao extends Component {
    render() {
        const elementosTollBar = [
            {
                corFundo: global.corSoja,
                imagem: global.imagemSoja,
                texto: "SOJA",
                link: "TelaSoja"
            },
            {
                corFundo: global.corCana,
                imagem: global.imagemCana,
                texto: "CANA",
                link: "TelaCana"
            }, {
                corFundo: global.corMilho,
                imagem: global.imagemMilho,
                texto: "MILHO",
                link: "TelaMilho"
            }
        ]
        const conteudo = {
            corForte: global.corAlgodaoForte,
            corFraca: global.corAlgodao,
            imagemIcone: {
                imagem: global.imagemAlgodao,
                width: 30,
                height: 30,
            },
            texto: "ALGODAO"
        }
        return (
            <View style={{ flexDirection: "column", flex: 1 }}>
                <TextoLogo />
                <TollBar elementosTollBar={elementosTollBar} navigation={this.props.navigation} />
                <Title conteudo={conteudo} />
            </View>
        );
    }
}

