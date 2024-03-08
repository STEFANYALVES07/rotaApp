//importa os itens necessáriosdo React

import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

//exporta e organiza os componentes para o funcionamento do site

export default function ButtonComponent2() {
    const navigation = useNavigation ();

    return(
        <View>
        <Button title='Login' onPress={() => navigation.navigate("Login")} />
        <Button title='Home' onPress={() => navigation.navigate("Home")} />
        <Button title='Contato' onPress={() => navigation.navigate("Contatos")} />
        </View>
    );
    }

    
