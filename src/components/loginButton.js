import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginButton() {
    const navigation = useNavigation ();
    return (

        <View>
     <Button title='Home' onPress={() => navigation.navigate("Home")} />
     <Button title='Sobre' onPress={() => navigation.navigate("Sobre")} />
     <Button title='Contato' onPress={() => navigation.navigate("Contatos")} />
        </View>

    )
}