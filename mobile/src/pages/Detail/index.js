import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.png';

import styles from './styles';


export default function Detail(){
    const navigation = useNavigation();

    //Necessário para identificar a espécie e suas informações
    const [tree, setTree] = useState([]);
    
    //Utilizado para pegar as informações fornecidas pelo QR Code
    const route = useRoute();
    const id = route.params.id;

    //Volta para Tela Principal
    function navigateToPrincipal() {
        navigation.navigate('Principal');
    }

    /*  Esta função vai esperar uma reposta. o ID vai possibilitar carregar os dados existentes 
        A api faz a conexão com o banco de dados (No caso Localhost)
        Essa resposta é colocada em método setTree para que os dados sejam
        armazenados na variável constante tree.
        Podendo ser obtido as informações que queremos para colocar nos campos.        
    */
    async function loadTree(){
        const response = await api.get(`tree/select/${id}`);
        setTree(response.data);
    }

    useEffect(() => {
        loadTree();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}  />
            </View>

        <FlatList
            data={tree}
            style={styles.infoTree}
            keyExtractor={tree => String(tree.id)}
            renderItem={({ item: tree}) => (

                <View style={styles.tree}>
                    <Text style={styles.treeProperty}>Nome Popular</Text>
                        <View style={styles.treeDec}>
                            <Text style={styles.treeValue}>{tree.popularName}</Text></View>

                    <Text style={styles.treeProperty}>Nome Científico</Text>
                        <View style={styles.treeDec}>
                            <Text style={styles.treeValue}>{tree.sciName}</Text></View>

                    <Text style={styles.treeProperty}>Descrição</Text>
                        <View style={styles.treeDec}>
                            <Text style={styles.treeValue}numberOfLines={20}>{tree.description}</Text></View>
                 </View>    
            )}     
        />
        <View style={styles.footer}>
            <TouchableOpacity
                        style={styles.backButton}
                        onPress={navigateToPrincipal}>
                            <Text style={styles.backButtonText}>VOLTAR</Text>
            </TouchableOpacity>  
        </View>

        </View>
    );
}