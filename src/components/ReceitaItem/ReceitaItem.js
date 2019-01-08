import React from 'react';
import{
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

import styles from './styles';


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


export default ReceitaItem; 