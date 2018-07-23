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

export default class TelaSoja extends Component {
    render() {
        const elementosTollBar = [

            {
                corFundo: global.corAlgodao,
                imagem: global.imagemAlgodao,
                texto: "ALGODAO",
                link: "TelaAlgodao"

            },
            {
                corFundo: global.corCana,
                imagem: global.imagemCana,
                texto: "CANA",
                link: "TelaCana"
            },
            {
                corFundo: global.corMilho,
                imagem: global.imagemMilho,
                texto: "MILHO",
                link: "TelaMilho"
            },
        ]
        const conteudo = {
            corForte: global.corSojaForte,
            corFraca: global.corSoja,
            imagemIcone: {
                imagem: global.imagemSoja,
                width: 30,
                height: 30,
            },
            texto: "SOJA"
        }
        return (
            <View style={{ flexDirection: "column", flex: 1 }}>
                <TextoLogo />
                <TollBar elementosTollBar={elementosTollBar} navigation={this.props.navigation} />
                <Title conteudo={conteudo}/>
            </View>
        );
    }
}

