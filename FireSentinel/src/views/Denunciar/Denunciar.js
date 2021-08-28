import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import estiloDenunciar from './estiloDenunciar';

function Denunciar({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloDenunciar.container}>
            <View style={estiloDenunciar.borda}>
                
                <Text style={estiloDenunciar.texto}>Denúnciar</Text>

                <TouchableOpacity style={estiloDenunciar.botaoContainer} onPress={voltar}>
                    <Text style={estiloDenunciar.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Denunciar;