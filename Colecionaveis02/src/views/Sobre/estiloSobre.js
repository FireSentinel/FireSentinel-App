import { StyleSheet } from 'react-native';

const estiloSobre = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   texto: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   textoA: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    padding: 2
 },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 20,
      height: 40,
      borderWidth: 5,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 15,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloSobre;