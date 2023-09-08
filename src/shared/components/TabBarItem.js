import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TabBarItem = (props) => {
    const { title, setType, type, selected } = props;
    return (
        <TouchableOpacity
            onPress={setType}
            style={[
                styles.container,
                styles.border,
                selected ? styles.selected : null,
            ]}
        >
            <Text style={[styles.text, type === title ? styles.bold : null]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default TabBarItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
    },
    text: {
        color: "#000",
        fontSize: 17,
    },
    bold: {
        fontWeight: "bold",
    },
    selected: {
        backgroundColor: "#fff",
    },
    border: {
        borderWidth: 1,
        borderColor: "#ddd",
    },
});
