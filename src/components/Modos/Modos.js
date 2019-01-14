import React from 'react';
import{ View, Text } from 'react-native';

import styles from './styles';

const Modos = props => (
    <View style={styles.container}>
        <Text style={styles.modos}>- {props.data.txt}</Text>
    </View>
);

export default Modos;


