import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, onPress, btnStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={btnStyle}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
