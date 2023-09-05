import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => prev - 1);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter with state</Text>
            <Button
                title="Increase"
                onPress={increase}
                btnStyle={[styles.button, { backgroundColor: "green" }]}
            />

            <View>
                <Text>Count : {count}</Text>
            </View>

            <Button
                title="Decrease"
                onPress={decrease}
                btnStyle={[styles.button, { backgroundColor: "red" }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "15",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },
    button: {
        alignItems: "center",
        padding: 10,
        width: 100,
        borderRadius: 10,
    },
});

export default Counter;
