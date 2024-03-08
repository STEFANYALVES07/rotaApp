//importa os itens necessáriosdo React

import { ImageBackground, Text } from "react-native";
import { styles } from "../styles/StyleSheet"; 
import ButtonComponent from "./ButtonComponent";
const image = {uri: 'src/assets/fundoo.png'};

//exporta e organiza os componentes para o funcionamento do site

export default function ImageComponent () {
    return(
        
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <text style= {styles.textohome}>Página Home</text>
             <ButtonComponent />
             </ImageBackground>
    )
}