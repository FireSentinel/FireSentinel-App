import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            

            <ImageBackground source={require('../../../assets/imagens/fundo.jpg')} style={estiloLogin.fundo}>
                             
            <View style={estiloLogin.fotoContainer}>
                <Image style={estiloLogin.foto} source={require('../../../assets/imagens/FireSentinel3.png')} />
            </View>
               
                <View style={estiloLogin.campoContainer}>
               
                    <MaterialCommunityIcons name="account" size={24} color="black" />
                    <TextInput
                        style={estiloLogin.campo}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login}
                    />
                    
                </View>
                
                <View style={estiloLogin.campoContainer}>
                    <MaterialCommunityIcons name="key" size={24} color="black" />
                    <TextInput
                        style={estiloLogin.campo}
                        placeholder="Senha"
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                    />
                </View>
                
                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloLogin.botaoLinearGradient}>
                        <MaterialCommunityIcons name="send" size={24} color="white" />
                        <Text style={estiloLogin.botaoTexto}> Entrar </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ImageBackground>
          

        </View>
    )
}

export default Login;
