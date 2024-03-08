//importa os itens necessáriosdo React

import { View, Text } from "react-native";
import { styles }  from '../styles/StyleSheet';
import Textocontatos from "../components/TextInputComponent";
import ButtonComponent3 from "../components/ButtonComponent3";

//exporta e organiza os componentes para o funcionamento do site

export default function Contatos() {
    return(
        <View style={styles.container}>  
        <text style= {styles.contatos}>Contatos</text>
        <Textocontatos/>
        <ButtonComponent3 />
      </View>
    );
  }
  