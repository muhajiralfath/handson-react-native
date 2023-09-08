import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TodoButton = ({ onPress, nameIcon, colorIcon }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={nameIcon} color={colorIcon} size={26} />
        </TouchableOpacity>
    );
};

export default TodoButton;

const styles = StyleSheet.create({});
