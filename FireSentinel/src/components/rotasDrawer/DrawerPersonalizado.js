import React from "react";
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View style={estiloRotasDrawer.fotoContainer}>
                <Image style={estiloRotasDrawer.foto} source={require('../../../assets/imagens/FireSentinel3.png')} />
                <Text style={estiloRotasDrawer.nome}>FireSentinel</Text>
            </View>

            <DrawerItemList {...props}/>

        </DrawerContentScrollView>
    );
}

export default DrawerPersonalizado;