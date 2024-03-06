import { View , Text } from 'react-native';
import { styles } from '../styles/StyleSheet';
import { TextInput } from 'react-native';

export default function TextInputComponent() {
    return (
<View>
<TextInput style={styles.inputName}
   placeholder='Digite seu email'
   placeholderTextColor='black'
   textAlign='center'
   justifyContent='center'
   />
</View>
    );
}