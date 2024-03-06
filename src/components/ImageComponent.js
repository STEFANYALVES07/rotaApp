import { ImageBackground, Text } from "react-native";
import { styles } from "../styles/StyleSheet"; 
import ButtonComponent from "./ButtonComponent";
const image = {uri: 'src/assets/ceu.png'};

export default function ImageComponent () {
    return(
        
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
           <Text>Adria, Gustavo, Pedro e Stefany</Text>
             <ButtonComponent />
             </ImageBackground>

    )
}