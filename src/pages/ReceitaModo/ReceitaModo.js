import React, { Component } from 'react';

import {
    View,
    FlatList,
} from 'react-native';

import {Modos} from '../../components/Modos';
import styles from './styles';

export default class ReceitaModo extends Component
{
    static navigationOptions = () => ({
        title: 'Modo de Preparo'
    });

    render()
    {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.screenProps.modo}
                    renderItem={({item})=><Modos data={item} />}
                    keyExtractor={(item)=>item.key.toString()}
                />
            </View>
        )
    }
}