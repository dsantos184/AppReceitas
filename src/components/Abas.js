import React, { Component } from 'react';

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import {ReceitaResumo} from '../pages/ReceitaResumo';
import {ReceitaIngredientes} from '../pages/ReceitaIngredientes';
import {ReceitaModo} from '../pages/ReceitaModo';

const Abas = createMaterialTopTabNavigator({
    ReceitaResumo:
    {
        screen:ReceitaResumo,
    },

    ReceitaIngredientes:
    {
        screen:ReceitaIngredientes,
    },

    ReceitaModo:
    {
        screen:ReceitaModo,
    },
},
{
    animationEnabled: true,
    tabBarOptions:
    {
        showIcon: false,
        style:
        {
            backgroundColor: '#EEEEEE',
        },
        labelStyle:
        {
            fontSize: 14,
        },
        activeTintColor: '#333333',
        inactiveTintColor: '#CCCCCC'
    }
})

export default createAppContainer(Abas);
