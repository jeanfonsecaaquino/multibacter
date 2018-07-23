import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;

export default class Title extends Component {

    render() {
        renderizarTela = (conteudo) => {
            return (
                <View style={{
                    width: screenWidth,
                    backgroundColor: conteudo.corForte,
                    flex: 1,
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    alignContent: "center",
                    alignItems: "center",
                    height: 50
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
                    <Text style={{ marginLeft: 15 , color : 'white'}}>{conteudo.texto}</Text>
                </View>
            );
        }
        return (
            <View style={{
                flexDirection: "row",
                width: screenWidth,
                height: screenHeigth,
                flex: 0,
                backgroundColor: this.props.conteudo.corFraca
            }}>
                {renderizarTela(this.props.conteudo)}
            </View>
        );
    }
}