import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Another piece of text</Text>
        <Text>And another one</Text>
      </View>
      <Button title="Click me" onPress={() => alert('Button clicked!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginBottom: 10, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: 'blue', 
    padding: 10 
  }
});
