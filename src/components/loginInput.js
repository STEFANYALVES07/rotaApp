//importa os itens necessáriosdo React

import { View, TextInput } from 'react-native';
import { styles } from '../styles/StyleSheet';

//exporta e organiza os componentes para o funcionamento do site

export default function LoginInput() {
    return (

        <View>
            <TextInput  style={styles.InputName}
                placeholder='E-mail'
            />
            <TextInput style={styles.InputName}
                placeholder='Senha'
                secureTextEntry={true}
            />
        </View>
    );
}