import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as ScreenOrientation from 'expo-screen-orientation';       
import { Button } from "react-native";
import { useState } from "react";


async function Default(){
    await ScreenOrientation.unlockAsync();
    setCor("#FF69B4");
  }

  async function DeitarDireita() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    setCor("#FF1493");
  }

  async function DeitarEsquerda() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    setCor("#C71585");
  }

  async function ForcarNormal() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
    setCor("#DB7093");
  }

  async function ForcarInverter() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
    setCor("#FFB6C1");
  }

  async function informar() {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setInfoUwU(orientation);
  }

export default function ScreenOrientationScreen() {

    const[info, setInfo] = useState([]);
    
    function informar(){
        setInfo(ScreenOrientation.getOrientationAsync());
    }



  return (
        <View style={styles.container}>
          <Header style={styles.title} title="Orientação de Tela" />
    
          
          
          <Button style={styles.textBtn} title="Padrão" onPress={ Default } />
          <Button style={styles.textBtn} title="Forçar Deitar Direita" onPress={ DeitarDireita } />
          <Button style={styles.textBtn} title="Forçar Deitar Esquerda" onPress={ DeitarEsquerda } />
          <Button style={styles.textBtn} title="Forçar Normal" onPress={ ForcarNormal } />
          <Button style={styles.textBtn} title="Forçar Inverter" onPress={ ForcarInverter } />
          <Button style={styles.textBtn} title="Forçar Normal2" onPress={ ForcarNormal } />
          <Button style={styles.textBtn} title="Informar" onPress={ informar } />
          <Text>{info}</Text> 
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