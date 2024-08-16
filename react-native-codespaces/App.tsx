import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hola mundo desde codespaces!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(63 63 70)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 42,
    color: 'white'
  }
});
