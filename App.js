import { StyleSheet, View, Text, StatusBar } from "react-native";
import Greetings from "./src/screens/Greetings";
import Card from "./src/components/Card";
import FlashSale from "./src/screens/FlashSale";

export default function App() {
    return (
        <>
            <View style={[styles.header]}>
                {/* <Greetings /> */}
                {/* <Card /> */}
                <FlashSale />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
});
