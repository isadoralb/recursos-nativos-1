import { StyleSheet, View } from 'react-native';
import DeviceInfo from './screens/Deviceinfo';
import BatteryInfo from './screens/BatteryInfo';
import ButtonScreen from './screens/ButtonScreen';
// import ButtonScreen from './screens/buttonScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
     {/* <DeviceInfo /> */}
     <ButtonScreen />
    </View>
  );
}