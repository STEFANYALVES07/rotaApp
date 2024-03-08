import { View, Text } from "react-native";
import { styles }  from '../styles/StyleSheet';
import Textocontatos from "../components/TextInputComponent";
import ButtonComponent3 from "../components/ButtonComponent3";

export default function Contatos() {
    return(
        <View style={styles.container}>  
        <text style= {styles.contatos}>Contatos</text>
        <Textocontatos/>
        <ButtonComponent3 />
      </View>
    );
  }
  