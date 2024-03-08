//importa os itens necessáriosdo React

import { View } from 'react-native';
import { styles } from '../styles/StyleSheet';
import { TextInput } from 'react-native';

//exporta e organiza os componentes para o funcionamento do site

export default function Textocontatos() {
    return (
<View>
<TextInput style={styles.InputName}
   placeholder='Digite seu nome'
   placeholderTextColor='black'
  
   />

<TextInput style={styles.InputName}
   placeholder='Digite seu email'
   placeholderTextColor='black'
   
   />
   <TextInput style={styles.InputName}
   placeholder='Deixe aqui sua mensagem'
   placeholderTextColor='black'
 
   />
</View>
    );
}