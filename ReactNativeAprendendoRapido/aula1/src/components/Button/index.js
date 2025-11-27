import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default class Button extends Component {
    render () {
        return  (
            <TouchableOpacity onPress={() => {
                Alert.alert(this.props.alerta);
            }}>
            <View> 
                <Text>{this.props.title}</Text>
                {this.props.children}
            </View>
            </TouchableOpacity>
        );
    }
};

// export default Button;
