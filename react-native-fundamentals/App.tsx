import { StyleSheet, Text, View } from 'react-native';
import ViewComponent from './components/viewComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
})