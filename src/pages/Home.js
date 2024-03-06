import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import ImageComponent from "../components/ImageComponent";
import ButtonComponent from "../components/ButtonComponent";
import ButtonComponent2 from "../components/Buttoncomponent2";




export default function Home() {
    return(
      <View style={styles.container}>  
      <ButtonComponent />
      <ButtonComponent2 />
        <ImageComponent />
      </View>
    );
  }
  