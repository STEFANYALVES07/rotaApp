import { ImageBackground, Text } from "react-native";
import { styles } from "../styles/StyleSheet"; 
import ButtonComponent from "./ButtonComponent";
const image = {uri: 'src/assets/fundoo.png'};

export default function ImageComponent () {
    return(
        
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
           <Text style={{ fontSize: 55, color: 'black', textAlign: 'center', backgroundColor:'lightblue' }}>Página home</Text>
             <ButtonComponent />
             </ImageBackground>
    )
}