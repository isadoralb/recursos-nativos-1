import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Notifications from 'expo-notifications';
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import { useEffect, useState } from "react";


export default function NotifyScreen() {
  const [expoToken, setExpoToken] = useState('');
  const [nomeDispositivo, setNomeDispositivo] = useState(); 
  const [nivelBateria, setNivelBateria] = useState(0);
    
  
    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    async function atualizarTudo() {
        await Bateria();

        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'aaaaaaaaa'  + nivelBateria + '%',
                body: nivelBateria,
            },
            trigger: { seconds: 2 }
        })
        setExpoToken(token);
    }

    


  async function Notificar(){
    const token = await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Notificação',
            subtitle: 'Notificação de teste',
            body: 'Notificação enviada com sucesso',
        },
        trigger: { seconds: 2 }
    })
    setExpoToken(token);
  }

  /*async function NotificarNome(){
    setNomeDispositivo(Device.osName);

    const token = await Notifications.scheduleNotificationAsync({
        content: {
            title: 'O seu dispositivo é:'  + {nomeDispositivo},
            body: {nomeDispositivo},
        },
        trigger: { seconds: 2 }
    })
    setExpoToken(token);
  }*/



    return (
        
        <View style={styles.textBox}>
            <Text> Expo Token: { expoToken } </Text>
            <Button title="Enviar Notificação" 
            onPress={ 
                async () => Notificar()}>
            </Button>
            
            <Button title="Nome do dispositivo" 
            ></Button>
            
            <Button title="Nivel de bateria"
            onPress={ atualizarTudo }></Button>
            <Button title="Ler Notificação clickada"></Button>
            <Button title="Enviar Notificação não clickada"></Button>
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