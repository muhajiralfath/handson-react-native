import { StyleSheet, View, Text, StatusBar } from "react-native";
import Greetings from "./src/screens/Greetings";
import Card from "./src/components/Card";
import FlashSale from "./src/screens/FlashSale";
import Counter from "./src/screens/Counter";

export default function App() {
    return (
        <>
            <View style={[styles.header]}>
                {/* <Greetings /> */}
                {/* <Card /> */}
                {/* <FlashSale /> */}
                <Counter />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
