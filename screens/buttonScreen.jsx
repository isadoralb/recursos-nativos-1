import { useState } from "react";
import { View, Text, Button } from "react-native";


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
            <Button onPress={mostrar}>!!!CLIQUE AQUI!!!</Button>
            <Text>Nome do dispositivo: {nomeDispositivo}</Text>
            <Text>Memória: {memoria}</Text>
            <Text>Versão: {versao}</Text>
            <Button onPress={atualizarTudo}></Button>
        </View>
    )
}