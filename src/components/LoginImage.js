import { View, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';

export default function LoginImage() {
    return (

        <View>
            <Image source={require('../assets/imagemnova.jpg')} style={styles.imagereact} />
        
        </View>
    )}
