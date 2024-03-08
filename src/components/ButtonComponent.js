import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";


export default function ButtonComponent() {
    const navigation = useNavigation ();
    return(
        <View>
        <Button title='Login' onPress={() => navigation.navigate("Login")} />
        <Button title='Sobre' onPress={() => navigation.navigate("Sobre")} />
        <Button title='Contato' onPress={() => navigation.navigate("Contatos")} />
           </View>
   
    );
    }

    
