import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoScreen from "./src/screens/TodoScreen/TodoScreen";

const App = () => {
    return (
        <View style={styles.container}>
            <TodoScreen />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
