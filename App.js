import { StyleSheet, View, Text, StatusBar } from "react-native";
import ProductSectionList from "./src/screens/ProductSectionList";

export default function App() {
    return (
        <>
            <View style={[styles.header]}>
                <ProductSectionList />
                {/* <ProductForm /> */}
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
