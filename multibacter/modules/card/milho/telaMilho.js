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
import Conteudo from '../conteudo';

export default class TelaMilho extends Component {

    render() {
        const elementosTollBar = [
            {
                corFundo: global.corSoja,
                imagem: global.imagemSoja,
                texto: "SOJA",
                link: "TelaSoja",
            },
            {
                corFundo: global.corAlgodao,
                imagem: global.imagemAlgodao,
                texto: "ALGODAO",
                link: "TelaAlgodao"
            }, {
                corFundo: global.corCana,
                imagem: global.imagemCana,
                texto: "CANA",
                link: "TelaCana"
            },
        ]
        const conteudo = {
            corForte: global.corMilhoForte,
            corFraca: global.corMilho,
            corMediana : global.corMilhoMediano,
            imagemIcone: {
                imagem: global.imagemMilho,
                width: 20,
                height: 30,
            },
            texto: "MILHO"
        }
        

        return (
            <View style={{ flexDirection: "column", flex: 1 }}>
                <TextoLogo />
                <TollBar elementosTollBar={elementosTollBar} navigation={this.props.navigation} />
                <Conteudo conteudo={conteudo} urlConteudo={"milho"} />
            </View>
        );
    }
}

