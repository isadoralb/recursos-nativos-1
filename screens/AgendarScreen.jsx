import { View, Text, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});



return(
    <View>
        <Header title="Nível da bateria" />
        <Text style={styles.container}> { nivelBateria } % </Text>
        <Button style={styles.container} title="Atualizar" onPress={ atualizarTudo } />
        <Footer />
    </View>
)