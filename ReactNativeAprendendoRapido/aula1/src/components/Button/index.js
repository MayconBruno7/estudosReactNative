import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default class Button extends Component {

    static  propTypes = {
        alerta: PropTypes.string,
    }

    static defaultProps= {
        alerta: 'Default Props',
    }
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
