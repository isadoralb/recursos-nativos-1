import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import * as Device from "expo-device";
import * as Battery from 'expo-battery';


export default function ButtonScreen(){
    const [nomeDispositivo, setNomeDispositivo] = useState();
    const [memoria, setMemoria] = useState();
    const [versao, setVersao] = useState();
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

    function mostrar(){
        setNomeDispositivo(Device.osName);
        setMemoria(Device.totalMemory);
        setVersao(Device.osVersion);
    }

    return(
        <View>
            <Button onPress={ mostrar } title="clicka"
            >
                Atualizar
            </Button>
            <Text>Nome do dispositivo: {nomeDispositivo} .</Text>
            <Text>Memória: {memoria} .</Text>
            <Text>Versão: {versao} .</Text>
            <Text style={{
                color: nivelBateria <= 100 && nivelBateria >= 80 ? 'green' : nivelBateria <= 79 && nivelBateria >= 50 ? 'yellow' : nivelBateria <= 49 && nivelBateria >= 30 ? 'orange' : 'red',
                fontWeight: 'bolder'
            }}>
             {nivelBateria}%
            </Text>
            
            <Button onPress={atualizarTudo} title="click"> 
            WEEE</Button>
        </View>
    )
}