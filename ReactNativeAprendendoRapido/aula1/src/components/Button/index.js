import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const Button = () => {
    return  (
        <TouchableOpacity onPress={() => {
                Alert.alert(this.props.alerta);
            }}
        >
            <View> 
                {/* {this.props.children} */}
            </View>
        </TouchableOpacity>
    );
};

export default Button;
