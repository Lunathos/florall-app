import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet,
         View,
         Text,
         Button } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import styles from './styles';

export default function Qrcode (){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const [id, setId] = useState([]);

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    function navigateToDetail(id) {
        navigation.navigate('Detail', { id });
    }


    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigateToDetail(data);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }

    if (hasPermission === false) {
        return <Text>No Access to camera</Text>
    }

        return (         
            <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                }}>
                
                <BarCodeScanner
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                >
                    <View style={styles.layerTop}>
                        <Text style={styles.text}>LER QR CODE</Text>
                    </View>

                    <View style={styles.layerMask}/>

                    <View style={styles.layerCenter}>  
                        <View style={styles.focused} />  
                    </View>

                    <View style={styles.layerMask}/>
                    
                    <View style={styles.layerBottom}>
                        <Text onPress={navigateBack} style={styles.cancel}> Cancelar </Text>
                    </View>

                </BarCodeScanner>
      
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        );
}