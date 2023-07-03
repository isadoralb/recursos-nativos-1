import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import DeviceInfoScreen from "./Deviceinfo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ButtonScreen from "./buttonScreen";
import ScreenOrientationScreen from "./ScreenOrientation";
import NotifyScreen from "./NotifyScreen";
import AgendarScreen from "./AgendarScreen";
import ContactInfo from "./ContactInfo";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOrientationScreen" component={ScreenOrientationScreen} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfoScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="NotifyScreen" component={NotifyScreen} />
        <Stack.Screen name="AgendarScreen" component={AgendarScreen} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}