import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native'

export default class Conteudo extends Component {

    constructor(props) {
        super(props);
        const conteudo = props.conteudo;
        this.state = { conteudo }
    }

    componentDidMount() {
        return fetch(global.urlBackend+ this.props.urlConteudo)
            .then((response) => response.json())
            .then((responseJson) => {
                let conteudo = this.state.conteudo;
                conteudo.headers = responseJson.headers;
                this.setState(conteudo);
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <Image source={global.voltar} style={{
                            width: 30,
                            margin: 3,
                            marginRight: 15,
                            alignSelf: 'flex-end',
                            height: 30
                        }} />
                    </View>
                </View>
            );
        }


        const renderizarSubtitulo = (cor, body) => {
            return (
                <View key={body.subtitulo} style={{ flex: 1, flexDirection: 'row', marginBottom: 5, backgroundColor: cor, marginLeft: 40 }}>
                    <Image source={global.mais} style={styles.imagemMaisBody} />
                    <Text key={body.subtitulo} style={styles.textoBody}>{body.subtitulo}</Text>
                </View>
            )
        }
        const renderizarAcordion = (cor, header) => {
            return (
                <View key={header.titulo}>
                    <Collapse style={{marginTop : 5 }}>
                        <CollapseHeader style={{ marginBottom: 5, backgroundColor: cor, height: 50 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image source={global.mais} style={styles.imagemMaisHeader} />
                                <Text style={styles.textoHeader}>{header.titulo}</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            {header.bodys.map((body) => {
                                return renderizarSubtitulo(cor, body)
                            })}
                        </CollapseBody>
                    </Collapse>
                </View>
            );
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
                {carregaConteudo()}
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
    }

});