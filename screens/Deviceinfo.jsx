import { View, Text } from "react-native";
import * as Device from "expo-device";

export default function DeviceInfo() {
  return (
    <View>
      <Text>
        O seu dispositivo é:
        {Device.Name}
        {Device.Brand}
        {Device.ModelName}
        {Device.DeviceInfo}
      </Text>
    </View>
  );
}
