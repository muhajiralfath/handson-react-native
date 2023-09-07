import { StyleSheet, View, Text, StatusBar } from "react-native";
import Greetings from "./src/screens/Greetings";
import Card from "./src/components/Card";
import FlashSale from "./src/screens/FlashSale";
import Counter from "./src/screens/Counter";
import ExampleList from "./src/components/ExampleList";
import FlatListExample from "./src/components/FlatListExample";
import ProductSectionList from "./src/screens/ProductSectionList";
import ProductForm from "./src/screens/ProductForm";

export default function App() {
    return (
        <>
            <View style={[styles.header]}>
                {/* <ProductSectionList /> */}
                <ProductForm />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 24,
        borderWidth: 2,
        borderColor: "red",
    },
});
