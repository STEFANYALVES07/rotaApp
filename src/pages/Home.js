//importa os itens necessáriosdo React

import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import ImageComponent from "../components/ImageComponent";
import { useNavigation } from "@react-navigation/native";

//exporta e organiza os componentes para o funcionamento do site

export default function Home() {
  const navigation = useNavigation ();
    return(
      <View style={styles.container}>  
        <ImageComponent />
      </View>
    );
  }
  