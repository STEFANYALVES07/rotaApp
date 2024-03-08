//IMPORT STACK NAVIGATION
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contatos from './src/pages/Contato';


// Criando uma instancia do STACK NAVIGATOR
// isso nos permite utilizar comandos para definir a navegação da aplicação 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Sobre' component={Sobre}/>
        <Stack.Screen name='Contatos' component={Contatos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

