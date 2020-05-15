import { StyleSheet, Dimensions } from 'react-native';

const opacity = 'rgba(255, 255, 255, .2)';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    //TOP
    layerTop: {
        flex: 1,

        borderBottomStartRadius: 2,
        borderBottomEndRadius: 2, 

        backgroundColor: '#a9d437',
        justifyContent: 'center' 
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF'
    },


    //CENTRO
    layerCenter: {
        flex: 2,
        flexDirection: 'column',

        borderStartWidth: 5,
        borderEndWidth: 5,
        borderColor: '#617d1a',

        borderRadius: 15,
        marginVertical: '5%',
        marginHorizontal: '5%',
        
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: opacity
    },

    focused: {
        flex: 10
    },
    
    //BOT
    layerBottom: {
        flex: 1,

        borderTopStartRadius: 20,
        borderTopEndRadius: 20, 

        justifyContent: 'center',
        backgroundColor: '#a9d437'
    },

    cancel: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF'
    },
});