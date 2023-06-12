import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Notifications from 'expo-notifications';
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import { useEffect, useState } from "react";


export default function NotifyScreen() {
  const [expoToken, setExpoToken] = useState('');
  const [nivelBateria, setNivelBateria] = useState(0);

  //tentativa de alert
  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta(){
        alert(ultimaNotificacao)
        console.log(ultimaNotificacao)
    }

  useEffect(() => {
    exibirAlerta ()
  }, [ultimaNotificacao])

  //teste de botão n lidas

  async function lerNotificacao(){
    const exemplo = await Notifications.getLastNotificationResponseAsync();
    console.log(exemplo.notification.request.identifier)
    alert('Notificação', exemplo.notification.request.identifier)
  }

//bateria
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
  
//nome do dispositivo
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

  async function NotificarNome(){

    const token = await Notifications.scheduleNotificationAsync({
        content: {
            title: 'O seu dispositivo é: '  + Device.osName,
            body: Device.osName,
        },
        trigger: { seconds: 2 }
    })
    setExpoToken(token);
  }



    return (
        
        <View style={styles.textBox}>
            <Text> Expo Token: { expoToken } </Text>
            <Button title="Enviar Notificação" 
            onPress={ 
                async () => Notificar()}>
            </Button>
            
            <Button title="Nome do dispositivo" 
            onPress={NotificarNome}></Button>
            
            <Button title="Nivel de bateria"
            onPress={ atualizarTudo }></Button>
            <Button title="Ler Notificação" onPress={ async() => lerNotificacao() }></Button>
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