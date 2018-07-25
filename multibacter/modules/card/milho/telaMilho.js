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
                link : "TelaAlgodao"
            }, {
                corFundo: global.corCana,
                imagem: global.imagemCana,
                texto: "CANA",
                link: "TelaCana"
            },
        ]
        const conteudo = {
            corForte : global.corMilhoForte,
            corFraca : global.corMilho,
            imagemIcone : {
                imagem: global.imagemMilho,
                width : 20,
                height: 30,
            },
            texto: "MILHO",
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
                <TollBar elementosTollBar={elementosTollBar} navigation={this.props.navigation}/>
                <Conteudo conteudo={conteudo}/>
            </View>
        );
    }
}

