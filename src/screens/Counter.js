import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Counter = () => {
    return (
        <View styleq={styles.container}>
            <Text style={styles.title}>Counter with state & props</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "15",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },
});

export default Counter;
