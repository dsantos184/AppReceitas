import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';

const Ingredientes = props => (
    <View style={styles.container}>
        <Text style={styles.ingredientes}>- {props.data.txt}</Text>
    </View>
)

export default Ingredientes;