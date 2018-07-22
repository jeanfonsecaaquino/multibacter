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
const tollBoxWidth = Dimensions.get('window').width / 3;

export default class Tollbar extends Component {

    render() {
        renderizarTela = (tollBarItem) => {
            return (
                <TouchableOpacity key={tollBarItem.texto} style={{ height: 30 }} onPress={() => { this.props.navigation.navigate(tollBarItem.link) }}>
                    <View key={tollBarItem.texto} style={{
                        width: tollBoxWidth,
                        backgroundColor: tollBarItem.corFundo,
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image style={{
                            width: 20,
                            height: 20
                        }} source={tollBarItem.imagem} />
                        <Text style={{ color: "white", marginLeft: 10 }}>{tollBarItem.texto}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View style={{ flexDirection: "row", flex: 1 }}>
                {this.props.elementosTollBar.map((tollBarItem) => {
                    return renderizarTela(tollBarItem);
                })}
            </View>
        );
    }
}