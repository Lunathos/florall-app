import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/images/logo.png';

import styles from './styles';


export default function Principal(){
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    function navigateToQrcode(){
        navigation.navigate('Qrcode');
    }

    function navigateToSobre() {
        navigation.navigate('Sobre');
    }
    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}  />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.scanButton}
                    onPress={navigateToQrcode}>
                        <Text style={styles.ButtonText}>ESCANEAR QR CODE</Text>
                        <Image
                            source={require('../../assets/images/qrcode.png')}
                            style={styles.QrCodeIconStyle}
                        />
                </TouchableOpacity>
            </View>     
            <View>

                <TouchableOpacity
                    style={styles.aboutButton}
                    onPress={navigateToSobre}>
                        <Text style={styles.ButtonText}>SOBRE</Text>
                </TouchableOpacity>
            </View>     
        </View>
    );
}