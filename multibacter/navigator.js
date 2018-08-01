import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TelaInicial from './modules/telaInicial/telaInicial';
import TelaMilho from './modules/card/milho/telaMilho';
import TelaAlgodao from './modules/card/algodao/telaAlgodao';
import TelaCana from './modules/card/cana/telaCana';
import TelaSoja from './modules/card/soja/telaSoja';
import TelaScanner from './modules/telaPremium/scanner';

//Cores de cada Icone
global.corCana = "#e76632";
global.corCanaMediano = "#c2582c";
global.corCanaForte = "#a34924";
global.corMilho = "#9ead35";
global.corMilhoMediano = "#8e9b30";
global.corMilhoForte = "#727d26";
global.corAlgodao = "#3a281e";
global.corAlgodaoMediano = "#624535";
global.corAlgodaoForte = "#502a16";
global.corSoja = "#f4ba41";
global.corSojaForte = "#b78c31";
global.corSojaMediano = "#ce9d35";
global.premiumBackgroundButton = '#888787';
global.premiumBackground = '#9ead35';

//Icones
global.imagemSoja = require("./assets/icone_soja.png");
global.imagemCana = require("./assets/icone_cana.png");
global.imagemMilho = require("./assets/icone_milho.png");
global.imagemAlgodao = require("./assets/icone_algodao.png");
global.hamburguer = require("./assets/hamburguer.png");
global.voltar = require('./assets/voltar.png');
global.mais = require('./assets/mais.png');
global.menos = require('./assets/menos.png');
global.loading = require('./assets/loading.gif');
global.setaEsquerda = require('./assets/seta-esquerda.png');
global.setaDireita = require('./assets/seta-direita.png');
global.premium = require('./assets/premium.png');
global.logo = require('./assets/logo.png')

//URL do backend
global.urlBackend = "https://multibacter-backend-cwcssbbzhb.now.sh/"


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
        TelaScanner : {
            screen : TelaScanner
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: "none"
    }
);

export default RootStack;