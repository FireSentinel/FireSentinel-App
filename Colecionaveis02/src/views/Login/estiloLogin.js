import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
   container: {   
      flex: 1, 
     
   },
   fundo: {
       justifyContent: 'center',
       width: '100%',
       height: '100%',
       
   },
   borda: {   
      justifyContent: 'center',
      backgroundColor: '#081a31',  
      width: '100%',
      height: '100%',
   },
  
   campoContainer: {
       flexDirection: 'row',
       padding: 10,
       paddingLeft: 50,
       paddingRight: 50,
       margin: 10,
       borderRadius: 5,
       alignItems: 'center',
       color: 'black'
   },
   campo: {
      fontSize: 18,
      color: 'black',
      marginLeft: 12,
      paddingBottom: 10,   
      borderBottomWidth: 1,
      borderColor: 'black',
    },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 20,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoLinearGradient: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 8
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      paddingLeft: 15,
      backgroundColor: 'transparent',
   },
   fotoContainer: {
      alignItems: 'center',
  },
  foto: {
      width: 300,
      height: 150,
  },
});

  export default estiloLogin;