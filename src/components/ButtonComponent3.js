//importa os itens necessáriosdo React

import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

//exporta e organiza os componentes para o funcionamento do site

export default function ButtonComponent3() {
    const navigation = useNavigation ();

    return(
        <View>
        <Button title='Login' onPress={() => navigation.navigate("Login")} />
        <Button title='Sobre' onPress={() => navigation.navigate("Sobre")} />
        <Button title='Home' onPress={() => navigation.navigate("Home")} />
        </View>
    );
    }
