import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

export default class Card extends Component {
    render() {
        const styles = StyleSheet.create({
            estiloCard: {
                backgroundColor: this.props.corFundo,
                width: this.props.width,
                height: this.props.height,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        const icones = {
            iconeSoja: require("../assets/icone_soja.png"),
            iconeMilho: require("../assets/icone_milho.png"),
            iconeCana: require("../assets/icone_cana.png"),
            iconeAlgodao: require("../assets/icone_algodao.png"),
            iconeLogo: require("../assets/logo.png")
        };
        let icone;
        if (this.props.icone in icones) {
            icone = icones[this.props.icone];
        }
        return (
            <View style={styles.estiloCard}>
                <Image style={{ width: 70, height: 70 }} source={icone} />
            </View>
        );
    }
}


