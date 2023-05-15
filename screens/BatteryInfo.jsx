import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Battery from 'expo-battery';

export default function BatteryInfo() {
    const [nivelBateria, setNivelBateria] = useState();
    
    async function Bateria() {
        setNivelBateria(Battery.getBatteryLevelAsync());
    }

    useEffect(() => {
        Bateria();
    })

    return(
        <View>
            <Header title="Bateria" />
            <Text> { nivelBateria } </Text>
            <Footer />
        </View>
    )
}