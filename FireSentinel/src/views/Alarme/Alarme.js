import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloAlarme';

function Alarme({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloAlarme.container}>
            <View style={estiloAlarme.borda}>
                
                <Text style={estiloAlarme.texto}>Seu Alarme</Text>

                <TouchableOpacity style={estiloAlarme.botaoContainer} onPress={voltar}>
                    <Text style={estiloAlarme.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Alarme;
