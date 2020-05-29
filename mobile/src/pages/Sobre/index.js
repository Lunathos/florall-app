import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/images/detail2x.png';
import uepaImg from '../../assets/images/uepalogo.png';

import styles from './styles';

export default function Sobre(){
    
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imageLogo} source={logoImg}  />
                <Image style={styles.image} source={uepaImg}  />
            </View>

            <View style={styles.body}>
                <Text style={styles.bodyTitle}>Colaboradores:</Text>
            
                <Text style={styles.bodyDescription}>DIANA BARROS NASCIMENTO</Text>
                <Text style={styles.bodyEmail}>E-mail: diana11barros@gmail.com</Text>

                <Text style={styles.bodyDescription}>ELTON SILVA CONTENTE</Text>
                <Text style={styles.bodyEmail}>E-mail: eltontones@gmail.com</Text>

                <Text style={styles.bodyDescription}>DAVI CARVALHO GOMES DOS SANTOS</Text>
                <Text style={styles.bodyEmail}>E-mail: ivacgs1999@gmail.com</Text>

                <Text style={styles.bodyDescription}>CARLOS BENEDITO BARREIROS GUTIERREZ</Text>
                <Text style={styles.bodyEmail}>E-mail: cbbgutierrez@gmail.com</Text>

            </View>

            <View >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={navigateBack}>
                        <Text style={styles.backButtonText}>VOLTAR</Text>
                </TouchableOpacity>
            </View>        
        </View>
    );
}