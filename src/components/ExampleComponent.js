import React from "react";
import { View, Text } from "react-native";

export default function ExampleComponent() {
    const name = "Al fath";
    return (
        <View>
            <Text>Ini adalah contoh component {name}</Text>
        </View>
    );
}

const Greeting = () => {
    return (
        <View>
            <Text>Menggunakan arrow function di export di bawahnya</Text>
        </View>
    );
};

export { Greeting };
