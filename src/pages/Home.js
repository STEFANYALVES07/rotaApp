import { View, Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";




export default function Home() {
    return(
      <View style={styles.container}>  
        <ImageComponent />
      </View>
    );
  }
  