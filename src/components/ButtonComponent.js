import { Button } from "react-native";


export default function ButtonComponent() {
    return(
     <Button title='Sobre' onPress={() => navigation.navigate("Sobre")} />
    );
    }

    
