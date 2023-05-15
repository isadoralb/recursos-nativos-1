import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Battery from 'expo-battery';
import { useEffect, useState } from "react";

export default function BatteryInfo() {
    const [nivelBateria, setNivelBateria] = useState();
    
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
            <Text> { nivelBateria } % </Text>
            <Footer />
        </View>
    )
}