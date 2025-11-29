import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Button from './src/components/Button';
// npx react-native start
// npx react-native run-android

export default class App extends Component {
  state = {
    contador: 0,
    name: 'Maycon',
  };

  incrementar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  alteraNome = (nome) => {
    this.setState({
      name: nome,
    });
  }
  render() {
    return (
      <View>
        <Text>Contador: {this.state.contador}</Text>
        <TouchableOpacity onPress={this.incrementar}>
          <Text>Incrementar</Text>
        </TouchableOpacity>
        <Button alerta="Apertou">
          <Text>Clicar</Text>
        </Button>
        <Button>
          <Text>Button 2</Text>
        </Button>

        <Text>Olá {this.state.name}</Text> 
         <TextInput 
            value={this.state.name} 
            onChangeText={nome => this.alteraNome(nome)}
          />
      </View>
    );
  }
}


// export default App;