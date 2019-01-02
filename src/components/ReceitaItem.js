import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';


const ReceitaItem = props => (
    <TouchableHighlight 
        style={styles.container}
        onPress={props.onPress}
    >
        
        <View style={styles.containerItem}>
            <Image 
                resizeMode='contain'
                source={{uri: props.data.imagem}} 
                style={styles.imgReceita}
            />

            <View style={styles.containerDescricao}>
                <Text style={styles.nome}>{props.data.nome}</Text>
                <Text style={styles.desc}>{props.data.descricao}</Text>
            </View>
        </View>

    </TouchableHighlight>
)

const styles = StyleSheet.create({
    container:
    {
        height: 80,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingRight: 10,
        paddingLeft: 10,
    },

    containerItem:
    {
        flex:1,
        flexDirection: 'row',
    },

    imgReceita:
    {
        width: 100,
        height: 70,
        marginTop: 5,
        marginRight: 5
    },

    containerDescricao:
    {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    nome:
    {
        fontSize: 14,
        fontWeight: 'bold',
    },

    desc:
    {
        fontSize: 14,
    }


});

export default ReceitaItem; 