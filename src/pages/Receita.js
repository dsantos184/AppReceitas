import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';

import Abas from '../components/Abas';
//parei no minuto 17:34
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
            <View style={styles.conainer}>

                {/*<TouchableHighlight onPress={this.voltar} style={styles.backButton}>
                            
                    <Image 
                        source={require('../../assets/img/back.png')}
                        style={styles.backImage}
                    />
                            
                </TouchableHighlight>

                <Image 
                    source={{uri: 'https://img.itdg.com.br/tdg/images/recipes/000/115/197/262559/262559_original.jpg'}}
                    style={styles.receitaImage}
        />*/}
                <Abas />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /*container:
    {
        flex: 1,
        marginTop: 20,
    },

    backImage:
    {
        width: 26,
        height: 26,
    },

    backButton:
    {
        width:26,
        height: 26,
        marginLeft: 10,
        marginTop: 5,
        zIndex: 99,
    },

    receitaImage:
    {
        height: 200,
        marginTop: -51,
    }*/

})