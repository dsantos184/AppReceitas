import React, { Component } from 'react';

import {
    View,
    FlatList,
} from 'react-native';

import styles from  './styles';
import {Ingredientes} from '../../components/Ingredientes'

export default class ReceitaIngredientes extends Component
{
    static navigationOptions = () => ({
        tabBarLabel: 'Ingredientes'
    })

    render()
    {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.screenProps.ingredientes}
                    renderItem={({item}) =><Ingredientes data={item} />}
                    style={styles.listIngredientes}
                    keyExtractor={(item,index)=>item.key.toString()}
                />
            </View>
        )
    }
}
