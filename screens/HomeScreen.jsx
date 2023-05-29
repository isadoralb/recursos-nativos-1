import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import DeviceInfoScreen from "./Deviceinfo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ButtonScreen from "./buttonScreen";
import ScreenOrientationScreen from "./ScreenOrientation";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOrientationScreen" component={ScreenOrientationScreen} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfoScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}