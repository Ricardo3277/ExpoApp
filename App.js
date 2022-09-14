import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

const image = { uri: "https://fondosmil.com/fondo/14060.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Desarrollo Movil Integral</Text>
      <Text>React Native</Text>
      <Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("./assets/Profile.png")}
        />
      <Text>Ricardo Daniel Flores Montoya</Text>
      <Text>170965</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Cochin"
  },
  image: {
    flex: 1,
    //justifyContent: "center"
  },
});
