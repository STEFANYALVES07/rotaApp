//Importa o modelo de style do React

import { StyleSheet } from "react-native";

//Exporta o Style para ser utilizado em todas as páginas

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
        flex: 1,
        width: '100%',
        alignItems:'center' ,
        justifyContent:'center' ,
        resizeMode: 'cover',
    },

    textohome:{
      fontSize: 55, 
      color: 'black', 
      textAlign: 'center', 
    },

    loginImageBackground: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      opacity: 30,
      justifyContent: 'center'
    },
    
    terciaryContainer: {
      backgroundColor: 'grey',
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: 'red',
      alignItems: 'center',
      width: '80%',
      borderRadius: 15,
      height: '40%',
      justifyContent: 'center',
      marginTop: '1%',
      shadowColor: 'red',
      shadowOpacity: 1,
      shadowRadius: 30,
      opacity: '95%',
    },
    
    secondaryContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
    
    },
    
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    
    InputName: {
    
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      margin: 20,
      justifyContent: 'center',
      backgroundColor: 'lighblue',
      opacity:'50%',
      width: '90%',
      height: '20%',
    
    },

    sobre:{
      fontSize: 55, 
      color: 'black', 
      textAlign: 'center', 
      backgroundColor: 'lightblue',
    },

     contatos: {
      fontSize: 55, 
      color: 'black', 
      textAlign: 'center', 
      backgroundColor: 'lightblue'

     },
    
    imagereact: {
      height: 300,
      width: 300,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      marginTop: '5%',
      borderRadius: 200,
      borderWidth: 2,
      borderColor: 'grey',
     
    },

    }
    )

 
  