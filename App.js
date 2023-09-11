import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoScreen from "./src/screens/TodoScreen/TodoScreen";
import SplashScreen from "./src/screens/SplashSCreen/SplashScreen";
import AppNavigation from "./src/navigation/RootNavigator";

const App = () => {
    return (
        <View style={styles.container}>
            {/* <SplashScreen /> */}
            <AppNavigation />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
