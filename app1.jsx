// Import necessary components from React Native
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

// Define the App component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello, I'm Copilot!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Click Me!" onPress={() => alert('Button pressed!')} />
      </View>
    </SafeAreaView>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Light blue background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000000', // Black text color
  },
  buttonContainer: {
    marginTop: 20,
  },
});

// Export the App component
export default App;