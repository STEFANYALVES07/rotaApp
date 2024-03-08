import { View, TextInput } from 'react-native';
import { styles } from '../styles/StyleSheet';

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