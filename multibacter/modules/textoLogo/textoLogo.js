import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class TextoLogo extends Component {
    render() {
        let estiloCombinado; 
        let {viewTextoLogo} = styles;
        if(this.props.estilo){
            estilo = {...this.props.estilo};
            estiloCombinado = StyleSheet.flatten([viewTextoLogo, estilo]);
        }else{
            estiloCombinado = StyleSheet.flatten([viewTextoLogo]);
        }
        return (
            <View style={estiloCombinado}>
                <Image style={{ width: screenWidth, height: 70 }} source={require("../../assets/logo_texto.png")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewTextoLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110
    }
});

