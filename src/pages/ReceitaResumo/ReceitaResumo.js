import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';
import styles from './styles';


export default class ReceitaResumo extends Component
{
    static navigationOptions = () => ({
        tabBarLabel: 'Resumo'
    })
    
    render()
    {
        return(
            <View style={styles.container}>
                <Text style={styles.nome}>{this.props.screenProps.nome}</Text>
                <Text style={styles.autor}>Autor: {this.props.screenProps.por}</Text>
                <Text style={styles.descricao}>{this.props.screenProps.descricao}</Text>
            </View>
        )
    }
}