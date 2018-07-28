import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    AsyncStorage
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native'
import { Thumbnail } from '../../node_modules/native-base';

export default class Conteudo extends Component {

    constructor(props) {
        super(props);
        const conteudo = props.conteudo;
        const body = null;
        const header = null;
        this.state = { conteudo, body, header }
    }

    recuperaDados() {
        return fetch(global.urlBackend + this.props.urlConteudo)
            .then(response => response.json())
            .then((responseJson) => {
                let conteudo = this.state.conteudo;
                conteudo.headers = responseJson.headers;
                return conteudo;
            }).catch((error) => {
                console.log(error);
            });
    }

    verificaSeEPremium() {
        let conteudo;
        this.recuperaDados().then((dados) => {
            conteudo = dados;
            return AsyncStorage.getItem("multibacterPremium")
        }).then((storage) => {
            if (!storage) {
                const headers = conteudo.headers.filter((header) => {
                    return header.tipo === 'free'
                })
                conteudo.headers = headers
            }
            return this.setState({ conteudo });

        })
    }

    componentDidMount() {
        this.verificaSeEPremium();
    }

    render() {
        const carregaConteudo = () => {
            if (this.state.conteudo.headers) {
                return (
                    <ScrollView>
                        {this.props.conteudo.headers.map((header) => {
                            return renderizarAcordion(this.props.conteudo.corForte, header);
                        })}
                    </ScrollView>
                )
            } else {
                return (
                    <View style={{ alignContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 200, height: 200 }} source={global.loading} />
                    </View>
                )
            }
        }
        const renderizarTitulo = (conteudo) => {
            return (
                <View style={{
                    width: screenWidth,
                    backgroundColor: conteudo.corForte,
                    flex: 1,
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    marginBottom: 3
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        marginLeft: 10,
                        margin: 3
                    }} source={global.hamburguer} />
                    <Image style={{
                        width: conteudo.imagemIcone.width,
                        height: conteudo.imagemIcone.height,
                        margin: 3,
                        marginLeft: 15
                    }} source={conteudo.imagemIcone.imagem} />
                    <Text style={{ marginLeft: 15, color: 'white' }}>{conteudo.texto}</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity onPress={() => { this.setState({ body: null, header: null }) }}>
                            <Image source={global.voltar} style={{
                                width: 30,
                                margin: 3,
                                marginRight: 15,
                                alignSelf: 'flex-end',
                                height: 30
                            }} />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        const renderizarSubtitulo = (cor, body, header) => {
            return (
                <TouchableOpacity key={body.subtitulo} onPress={() => { this.setState({ body: body, header: header }) }}>
                    <View key={body.subtitulo} style={{ flex: 1, flexDirection: 'row', marginBottom: 5, backgroundColor: cor, marginLeft: 40 }}>
                        <Image source={global.mais} style={styles.imagemMaisBody} />
                        <Text key={body.subtitulo} style={styles.textoBody}>{body.subtitulo}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        const renderizarAcordion = (cor, header) => {
            return (
                <View key={header.titulo}>
                    <Collapse style={{ marginTop: 5 }}>
                        <CollapseHeader style={{ marginBottom: 5, backgroundColor: cor, height: 50 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image source={global.mais} style={styles.imagemMaisHeader} />
                                <Text style={styles.textoHeader}>{header.titulo}</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            {header.bodys.map((body) => {
                                return renderizarSubtitulo(cor, body, header)
                            })}
                        </CollapseBody>
                    </Collapse>
                </View>
            );
        }
        const renderizarDetalhes = () => {
            return (
                <View style={{
                    flexDirection: "column",
                    width: screenWidth,
                    height: screenHeigth,
                    flex: 1
                }}>
                    <View style={{ flexBasis: '3%' }}>
                        {renderizarIndiceAlfabeto()}
                    </View>
                    <View style={{ width: screenWidth, flex: 1, flexDirection: 'row', alignContent: "center", alignItems: "center", flexBasis: '20%' }}>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: this.props.conteudo.corForte, height: 50, flexBasis: "7%" }}>
                            <Image style={{ alignSelf: 'flex-start', width: 20, height: 20, marginTop: 15 }} source={global.setaEsquerda} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: this.props.conteudo.corMediana, flexBasis: "86%", height: 50, alignContent: 'center', alignItems: 'center' }}>
                            <Text style={{ marginTop: '5%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>{this.state.body.subtitulo}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: this.props.conteudo.corForte, height: 50, flexBasis: "7%" }}>
                            <Image style={{ alignSelf: 'flex-end', alignItems: 'center', width: 20, height: 20, marginTop: 15 }} source={global.setaDireita} />
                        </View>
                    </View>
                    <ScrollView style={{ flexBasis: '60%' }}>
                        {corpoDetalhe()}
                        {corpoDetalhe()}
                        {corpoDetalhe()}
                        {corpoDetalhe()}
                    </ScrollView>
                    <ScrollView style={{ flexBasis: '17%' }} horizontal={true}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            {this.state.body.imagens.map((imagem, i) => {
                                return (
                                    <Image key={imagem + i} style={{ width: 90, height: 70, margin: 5 }} source={{ uri: imagem }} />
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            )
        }

        const corpoDetalhe = () => {
            return (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>{this.state.body.texto}</Text>
                </View>
            )
        }

        const renderizarIndiceAlfabeto = () => {
            const indiceAlfabeto = require('./indiceAlfabeto');
            let body = this.state.body;
            let header = this.state.header;
            let conteudo = this.state.conteudo;
            let letrasComConteudo = header.bodys.map(body => body.letra);
            return (
                <View style={{ flex: 1, flexDirection: 'row', height: 10 }}>
                    {indiceAlfabeto.indice.map((indice) => {
                        let estiloLetra;
                        let linkBody;
                        if (indice.letra === body.letra) {
                            estiloLetra = styles.letraSelecionada;
                        } else if (letrasComConteudo.includes(indice.letra)) {
                            estiloLetra = styles.letraComConteudo;
                            linkBody = header.bodys.find(body => body.letra === indice.letra);
                        } else {
                            estiloLetra = styles.letraSemConteudo;
                        }
                        if (linkBody) {
                            return (<Text onPress={() => { this.setState({ body: linkBody, header: header }) }} key={indice.letra} style={estiloLetra}>{indice.letra}</Text>)
                        } else {
                            return (<Text key={indice.letra} style={estiloLetra}>{indice.letra}</Text>)

                        }
                    })}
                </View>
            )
        }


        return (
            <View style={{
                flexDirection: "column",
                width: screenWidth,
                height: screenHeigth,
                flex: 1,
                backgroundColor: this.props.conteudo.corFraca,
            }}>
                <View style={{ height: 50 }}>
                    {renderizarTitulo(this.props.conteudo)}
                </View>
                {this.state.body ? renderizarDetalhes() : carregaConteudo()}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    imagemMaisHeader: {
        height: 20,
        width: 20,
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 10
    },
    textoHeader: {
        height: 20,
        width: screenWidth,
        marginLeft: 10,
        marginBottom: 15,
        marginTop: 16,
    },
    imagemMaisBody: {
        height: 20,
        width: 20,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 10
    },
    textoBody: {
        height: 20,
        width: screenWidth,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 6,
    },
    letraSelecionada: {
        marginLeft: 4,
        height: 16,
        width: 10,
        backgroundColor: '#dbdbdb',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    letraComConteudo: {
        marginLeft: 4,
        height: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    letraSemConteudo: {
        marginLeft: 4,
        height: 16,
        color: '#7c7c7c',
        textAlign: 'center',
    }

});