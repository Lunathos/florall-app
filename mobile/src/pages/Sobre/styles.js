import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#a9d437',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        marginTop: 10,

        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,

        flexDirection: 'column',
        textAlign: 'justify',
        backgroundColor: '#617d1a',
       
    },


    bodyTitle: {

        fontSize: 50,
        alignSelf: 'center',
        color: '#FFF',
    },
    
    bodyDescription: {
        
        marginStart: 15,
        marginEnd: 15,

        paddingBottom: 35,

        lineHeight: 35,
        fontSize: 25,
        color: '#FFF',
    },

    backButton: {
        padding: 10,
        marginTop: 10,

        borderTopStartRadius: 2,
        borderTopEndRadius: 2,

        borderBottomStartRadius: 2,
        borderBottomEndRadius: 2,


        backgroundColor: '#7f5b1c',

        justifyContent: 'center',
        alignItems: 'center',
    },

    backButtonText: {
        
        color: '#f6dc95',
        fontSize: 29,
    },

});