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
export default class TelaCana extends Component {
    render() {
        const elementosTollBar = [
            {
                corFundo: global.corSoja,
                imagem: global.imagemSoja,
                texto: "SOJA",
                link: "TelaSoja"
            },
            {
                corFundo: global.corAlgodao,
                imagem: global.imagemAlgodao,
                texto: "ALGODAO",
                link: "TelaAlgodao"
            }, {
                corFundo: global.corMilho,
                imagem: global.imagemMilho,
                texto: "MILHO",
                link: "TelaMilho"
            }
        ]
        const conteudo = {
            corForte: global.corCanaForte,
            corFraca: global.corCana,
            imagemIcone: {
                imagem: global.imagemCana,
                width: 30,
                height: 30,
            },
            texto: "CANA",
            headers: [
                {
                    titulo: "MANEJO DE DOENÇA DE SOLO",
                    bodys: [{
                        subtitulo: "TITULO 1"
                    }]
                },
                {
                    titulo: "MANEJO DE DOENÇAS FOLIARES",
                    bodys: [
                        {
                            subtitulo: "SUB TITULO 1",
                        },
                        {
                            subtitulo: "SUB TITULO 2",
                        },
                        {
                            subtitulo: "SUB TITULO 3",
                        }
                    ]
                }
            ],
        }
        return (
            <View style={{ flexDirection: "column", flex: 1 }}>
                <TextoLogo />
                <TollBar elementosTollBar={elementosTollBar} navigation={this.props.navigation} />
                <Conteudo conteudo={conteudo} />
            </View>
        );
    }
}

