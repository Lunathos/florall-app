import { StyleSheet } from 'react-native';

//import { useFonts } from '@use-expo/font';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 5,

        backgroundColor: '#a8d434',
    },

    //Cabeçalho
    header: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingVertical: '2%',
        
        backgroundColor: '#617d1a',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //Estilização do FlatList

    infoTree: {
        margin: -10,
        //marginBottom: 100,
        marginVertical: 20,
    },


    tree: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    treeProperty: {
        fontSize: 20,
        color: '#FFF',
    },

    //Estilização das Informações
    treeDec: {
        
        //marginVertical: '2%',
        marginHorizontal: '2%',
        borderRadius: 5,
        backgroundColor: '#617d1a',
    },

    treeValue: {
        marginHorizontal: 5,
        fontSize: 20,
        color: '#FFF',
    },

    //Rodapé
    footer: {
        marginHorizontal: '2%',
        justifyContent: 'center',
    },

    //Estilização Button
    backButton: {
        alignItems: 'center',
        
        paddingVertical: '2%',

        marginVertical: '5%',

        borderRadius: 2,
        backgroundColor: '#7f5b1c',
    },

    backButtonText: {
        color: '#f6dc95',
        fontSize: 25,
    },

});