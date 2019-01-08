import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

import Abas from '../../components/Abas';

import styles from './styles';

export default class Receita extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {}

        this.voltar = this.voltar.bind(this);
    }

    static navigationOptions = ({navigation}) =>({
        title: navigation.state.params.data.nome,
        header: null,
    })
    
    voltar()
    {
        this.props.navigation.goBack()
    }

    render()
    {
        return(
            <View style={styles.container}>

                <TouchableHighlight onPress={this.voltar} style={styles.backButton}>
                            
                    <Image 
                        source={require('../../img/back.png')}
                        style={styles.backImage}
                    />
                            
                </TouchableHighlight>

                <Image 
                    source={{uri: 'https://img.itdg.com.br/tdg/images/recipes/000/115/197/262559/262559_original.jpg'}}
                    style={styles.receitaImage}
                />
                
                <Abas />
            </View>
        )
    }
}