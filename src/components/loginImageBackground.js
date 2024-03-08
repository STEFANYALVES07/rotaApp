//importa os itens necessáriosdo React

import { ImageBackground } from 'react-native';
import { styles } from '../styles/StyleSheet';
import LoginText from './loginText';
import LoginInput from './loginInput';
import LoginButton from './loginButton';
import LoginImage from './LoginImage';

//exporta e organiza os componentes para o funcionamento do site

export default function loginImagemBackgroud() {
    return (

        <ImageBackground source={require('../assets/fundoo.png')} resizeMode="cover" style={styles.loginImageBackground}>
            <LoginText />
            <LoginInput />
            <LoginButton />
            <LoginImage />
        </ImageBackground>
    )
}