import { StyleSheet } from 'react-native'


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

export default styles;