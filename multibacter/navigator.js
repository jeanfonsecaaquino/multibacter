import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TelaInicial from './modules/telaInicial/telaInicial';
import TelaMilho from './modules/card/milho/telaMilho';
import TelaAlgodao from './modules/card/algodao/telaAlgodao';
import TelaCana from './modules/card/cana/telaCana';
import TelaSoja from './modules/card/soja/telaSoja';

//Cores de cada Icone
global.corCana = "#e76632";
global.corMilho = "#9ead35";
global.corAlgodao = "#3a281e";
global.corSoja = "#f4ba41";

//Icones
global.imagemSoja = require("./assets/icone_soja.png");
global.imagemCana = require("./assets/icone_cana.png");
global.imagemMilho = require("./assets/icone_milho.png");
global.imagemAlgodao = require("./assets/icone_algodao.png");

const RootStack = createStackNavigator(
    {
        Home: {
            screen: TelaInicial
        },
        TelaMilho: {
            screen: TelaMilho
        },
        TelaSoja: {
            screen: TelaSoja
        },
        TelaAlgodao: {
            screen: TelaAlgodao
        },
        TelaCana: {
            screen: TelaCana
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: "none"
    }
);

export default RootStack;