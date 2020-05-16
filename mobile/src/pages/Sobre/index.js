import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/images/detail2x.png';

import styles from './styles';

export default function Sobre(){
    
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}  />
            </View>

            <View style={styles.body}>
                <Text style={styles.bodyTitle}>Sobre</Text>
            
                <Text style={styles.bodyDescription}>
                 O aplicativo FlorAll foi
                 desenvolvido para fornecer
                 de forma gratuita e rápida
                 informações sobre qualquer
                 espécie vegetal utilizando
                 a tecnologia QR Code.</Text>
            </View>

            <View style={styles.buttonPos}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={navigateBack}>
                        <Text style={styles.backButtonText}>VOLTAR</Text>
                </TouchableOpacity>
            </View>        
        </View>
    );
}