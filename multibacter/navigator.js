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
import imagemSoja from "./assets/icone_soja.png";
import imagemCana from "./assets/icone_cana.png";
import imagemMilho from "./assets/icone_milho.png";
import imagemAlgodao from "./assets/icone_algodao.png";
import hamburguer from "./assets/hamburguer.png";
import voltar from "./assets/voltar.png";
import mais from "./assets/mais.png";
import menos from "./assets/menos.png";
import setaEsquerda from "./assets/seta-esquerda.png";
import setaDireita from "./assets/seta-direita.png";
import premium from './assets/premium.png';
import logo from "./assets/logo.png";

global.imagemSoja = imagemSoja;
global.imagemCana = imagemCana;
global.imagemMilho = imagemMilho;
global.imagemAlgodao = imagemAlgodao;
global.hamburguer = hamburguer;
global.voltar = voltar;
global.mais = mais;
global.menos = menos;
global.setaEsquerda = setaEsquerda;
global.setaDireita = setaDireita;
global.premium = premium;
global.logo = logo;

//URL do backend
global.urlBackend = "https://multibacter-backend.now.sh"


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