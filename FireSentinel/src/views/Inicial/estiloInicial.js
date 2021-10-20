import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   header: {
       height: 70,
       width: '100%',
       backgroundColor: '#081a31',
       flexDirection: 'row',
       alignItems: 'flex-end',
   },
   fundo: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       width: '100%',
       height: '100%',
   },
   botaoBackground: {
       width: 140,
       height: 100,
       borderRadius: 10,
       overflow: 'hidden',
       justifyContent: 'flex-end',
       alignItems: 'center',
       padding: 10,
       borderWidth: 1,
       borderColor: '#14417b',
       marginTop: 250,
   },
   Texto: {
    fontFamily: 'Arial',
      fontSize: 28,
      color: '#081a31',
      fontWeight: 'bold',
      textAlign: 'center',

   },
   fotoContainer: {
    alignItems: 'center',
   },
   foto: {
    width: 300,
    height: 150,
},
});

  export default estiloInicial;