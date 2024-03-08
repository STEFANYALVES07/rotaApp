//importa os itens necessáriosdo React

import { View, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';

//exporta e organiza os componentes para o funcionamento do site

export default function LoginImage() {
    return (

        <View>
            <Image source={require('../assets/imagemnova.jpg')} style={styles.imagereact} />
        
        </View>
    )}
