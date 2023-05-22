import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Battery from 'expo-battery';
import { useEffect, useState } from "react";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default function BatteryInfo() {
    const [nivelBateria, setNivelBateria] = useState();

    async function atualizarTudo() {
        Bateria()
    }

    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    useEffect(() => {
        Bateria();
    },[])

    return(
        <View>
            <Header title="Nível da bateria" />
            <Text style={styles.container}> { nivelBateria } % </Text>
            <Button style={styles.container} title="Atualizar" onPress={ atualizarTudo } />
            <Footer />
        </View>
    )
}