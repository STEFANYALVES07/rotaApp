//IMPORT STACK NAVIGATION
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';



// Criando uma instancia do STACK NAVIGATOR
// isso nos permite utilizar comandos para definir a navegação da aplicação 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Sobre' component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

