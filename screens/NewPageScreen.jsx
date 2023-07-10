import { View, Text, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function DeviceInfoScreen() {
  return (
        <View style={styles.container}>
          <Header style={styles.title} title="Informações do Aparelho" />
    
          <View style={styles.textBox}>
            <Text style={styles.purpleText}>
              O nome do seu Aparelho é: {Device.osName}
            </Text>
      
            <Text style={styles.purpleText}>
              A Marca do aparelho é: {Device.brand}
            </Text>
      
            <Text style={styles.purpleText}>
              O Modelo do aparelho é: {Device.osName}
            </Text>
      
            <Text style={styles.purpleText}>
              O nome completo do aparelho é: {Device.osName}
            </Text>
      
            <Text style={styles.purpleText}>
              O Design do aparelho é: {Device.osName}
            </Text>
      
            <Text style={styles.purpleText}>
              O Ano de lançamento é: {Device.deviceYearClass}
            </Text>
      
            <Text style={styles.purpleText}>
              A memória do aparelho é: {Device.totalMemory}
            </Text>
      
            <Text style={styles.purpleText}>
              A Versão do sistema é a: {Device.osVersion}
            </Text>
      
            <Text style={styles.purpleText}>
              A arquitetura do aparelho é: {Device.osName}
            </Text>
          </View>
    
          <View style={styles.boxBtn}>
            <Text style={styles.textBtn}>Sair</Text>
          </View>
          <Footer />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },

  title: {
    color: "#fff",
    backgroundColor: "#606",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  textBox: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  purpleText: {
    color: "#fff",
    backgroundColor: "#969",
    // textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    width: 230,
    height: 60,
    padding: 10,
  },

  boxBtn: {
    backgroundColor: "#7C7B7E",
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },

  textBtn: {
    backgroundColor: '#4C9BCC',
    paddingVertical: 5,
    paddingHorizontal: 90,
    color: '#fff'
  }
});