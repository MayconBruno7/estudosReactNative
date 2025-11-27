import React from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';

// npx react-native start
// npx react-native run-android

const App = () => {
  return (
    <View>
      <Button alerta="Apertou">
        <Text>Clicar</Text>
      </Button>
    </View>
  );
}


export default App;