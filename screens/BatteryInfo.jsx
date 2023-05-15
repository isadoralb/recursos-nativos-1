import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Battery from 'expo-battery';

export default function BatteryInfo() {
    return(
        <View>
            <Header title="Bateria" />
            <Text>BatteryInfo</Text>
            <Footer />
        </View>
    )
}