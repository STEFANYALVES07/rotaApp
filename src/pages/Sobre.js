//importa os itens necessáriosdo React

import { View, } from "react-native";
import { styles }  from '../styles/StyleSheet';
import { Image } from "react-native";
import ButtonComponent2 from "../components/ButtonComponent2";

//exporta e organiza os componentes para o funcionamento do site

export default function Sobre() {
    return(
      <View style={styles.container}>  
        <Image source={require('../assets/imagemnova.jpg')} style={styles.imagereact} />
        <text style= {styles.sobre}>Esta é uma borboleta de cor azul em um fundo branco em uma moldura arredondada.</text>
        <ButtonComponent2 />
      </View>
    );
  }
  