import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import estiloMapa from './estiloMapa';

function Mapa({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloMapa.container}>
            <View style={estiloMapa.borda}>
                
                <Text style={estiloMapa.texto}>Mapa</Text>

                <TouchableOpacity style={estiloMapa.botaoContainer} onPress={voltar}>
                    <Text style={estiloMapa.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Mapa;