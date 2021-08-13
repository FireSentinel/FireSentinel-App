import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if (!isDrawerOpen) {
            navigation.openDrawer();
        }
    }
 
   
    
    return (
        <View style={estiloInicial.container}>

            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={18} color="white" />
                </TouchableOpacity>
            </View>
            
            <ImageBackground source={require('../../../assets/imagens/fundo2.jpg')} style={estiloInicial.fundo}>

            <Text style={estiloInicial.Texto}>Bem vindo ao FireSentinel!         Somos Danilo, Gabriel e Keisy</Text>

            </ImageBackground>

        </View>
    )
}

export default Inicial;
