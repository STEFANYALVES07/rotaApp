import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import ImageComponent from "../components/ImageComponent";
import { useNavigation } from "@react-navigation/native";




export default function Home() {
  const navigation = useNavigation ();
    return(
      <View style={styles.container}>  
        <ImageComponent />
      </View>
    );
  }
  