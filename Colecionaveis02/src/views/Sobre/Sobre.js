import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloSobre from './estiloSobre';

function Sobre({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloSobre.container}>
            <View>
                <Text style={estiloSobre.texto}>Sobre</Text>
                <Text style={estiloSobre.textoA}>O aquecimento global continua a aumentar, uma das razoes são os grandes incêndios sem controle
                    que ocorrem pelo globo e que não são combatidos de forma eficaz. O FireSentinel, um Software de vigilância
                    24 horas, busca amenizar este problema através da detecção de incêndios e a disponibilização das
                    informações à população e às autoridades, possibilitando uma reação de combate mais rápida e assim
                    evitando danos bens públicos e privados e a vida dos cidadãos. Nosso primeiro passo, já concluído, foi realizar
                    pesquisas sobre o tema e a viabilidade do projeto, envolvendo custos e quais linguagens de programação e
                    demais equipamentos serão usados no desenvolvimento do FireSentinel. Essas pesquisas permitiram
                    amadurecermos e evoluir a ideia. Também já realizamos pesquisas de campo com civis. O próximo passo são
                    pesquisas com o Corpos de Bombeiro e ONGs. O aplicativo se encontra em desenvolvimento. Espera-se que
                    o App concluído possa alertar a população e autoridades rapidamente, diminuindo vítimas e danos causados
                    por incêndios.</Text>
                <Text style={estiloSobre.textoA}>O aplicativo contará com diversas funcionalidades, entre elas: Um mapa com indicadores de focos de incêndios pelo 
                    mundo, conexão com nossos alarmes de incêndio e opções para denunciar de focos de fogo e ligar para as autoridades locais.</Text>
               
                <TouchableOpacity style={estiloSobre.botaoContainer} onPress={voltar}>
                   <Text style={estiloSobre.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Sobre;
