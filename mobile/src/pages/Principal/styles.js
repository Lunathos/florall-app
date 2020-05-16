import { StyleSheet } from 'react-native';

//import { useFonts } from '@use-expo/font';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#a9d437',
    },

    //Cabeçalho
    header: {

        height: '55%',
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //Referência ao Estilo do botão de Escanear
    scanButton: {
        paddingVertical: 10,

        borderRadius: 10,

        backgroundColor: '#9c8a1e',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    //Estilo do Ícone do QR Code no scanButton
    QrCodeIconStyle: {
        padding: 10,
        margin: 5,
        height: 75,
        width: 75,
        resizeMode: 'stretch',
        overlayColor: '#a9d437',
        borderRadius: 10,
    },

    //Referência ao Estilo do botão de Sobre
    aboutButton: {
        marginTop: 20,
        paddingVertical: 20,

        borderRadius: 10,

        backgroundColor: '#9c8a1e',

        alignItems: 'center',
        justifyContent: 'center',
    },

    //Estilização dos Textos dentro dos Botões
    ButtonText: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
    },

});