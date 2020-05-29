import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#a9d437'
    },

    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        borderRadius: 5,
        backgroundColor: '#617d1a'
    },

    imageLogo: {

        width: 150,
        height: 150,
        resizeMode: 'contain'
    },

    image: {

        width: 170,
        height: 150,
        resizeMode: 'contain',
        backgroundColor: '#FFF'
    },

    body: {

        marginTop: '5%',
        marginBottom: '5%',
        paddingBottom: 10,

        borderRadius: 5,

        flexDirection: 'column',
        textAlign: 'justify',
        backgroundColor: '#617d1a'
       
    },


    bodyTitle: {

        fontSize: 35,
        textDecorationLine: 'underline',

        alignSelf: 'center',
        color: '#FFF'
    },
    
    bodyDescription: {
        marginTop: 10,
        lineHeight: 35,
        alignSelf: 'center',

        fontSize: 15,
        color: '#A9D437'
    },

    bodyEmail: {

        textDecorationLine: 'underline',
        paddingBottom: 5,
        alignSelf: 'center',
        fontSize: 15,
        color: '#FFF'     
    },

    backButton: {

        padding: 10,
        borderRadius: 5,
        backgroundColor: '#7f5b1c',

        justifyContent: 'center',
        alignItems: 'center'
    },

    backButtonText: {
        color: '#f6dc95',
        fontSize: 29
    },

});