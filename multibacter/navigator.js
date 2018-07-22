import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TelaInicial from './modules/telaInicial/telaInicial';
import TelaMilho from './modules/card/milho/telaMilho';
import TelaAlgodao from './modules/card/algodao/telaAlgodao';
import TelaCana from './modules/card/cana/telaCana';
import TelaSoja from './modules/card/soja/telaSoja';

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
        headerMode : "none"
    }
);

export default RootStack;