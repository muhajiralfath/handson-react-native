import {
    Button,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useState } from "react";

const products = [
    {
        category: "Makanan",
        data: [
            {
                name: "Nasi Goreng",
                price: 2000,
            },
            {
                name: "Ayam Goreng",
                price: 81000,
            },
        ],
    },
    {
        category: "Minuman",
        data: [
            {
                name: "Teh",
                price: 3000,
            },
            {
                name: "Jus Jeruk",
                price: 5000,
            },
        ],
    },
    {
        category: "Minuman Bersoda",
        data: [
            {
                name: "Fanta",
                price: 5000,
            },
            {
                name: "Sprite",
                price: 6000,
            },
        ],
    },
];

export default function ProductSectionList() {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [category, setCategory] = useState("Makanan");
    const filteredProduct = products.filter(
        (product) => product.category === category
    );
    const setActiveButton = (currentCategory) => {
        return category === currentCategory
            ? { backgroundColor: "#b2adad" }
            : { backgroundColor: "#dfdfdf" };
    };

    return (
        <View style={styles.container}>
            {showAddProduct ? (
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Text>Ini Form Product</Text>
                    <Button
                        title="List Product"
                        onPress={() => setShowAddProduct(false)}
                    />
                </View>
            ) : (
                <View>
                    <Button
                        title="Tambah Product"
                        onPress={() => setShowAddProduct(true)}
                    />
                    <View style={styles.headerSection}>
                        <TouchableOpacity
                            onPress={() => setCategory("Makanan")}
                            style={[styles.btn, setActiveButton("Makanan")]}
                        >
                            <Text>Makanan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setCategory("Minuman")}
                            style={[styles.btn, setActiveButton("Minuman")]}
                        >
                            <Text>Minuman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setCategory("Minuman Bersoda")}
                            style={[
                                styles.btn,
                                setActiveButton("Minuman Bersoda"),
                            ]}
                        >
                            <Text>Minuman Bersoda</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <SectionList
                            sections={filteredProduct}
                            keyExtractor={(item, index) => item.name + index}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>
                                        Rp. {item.price}
                                    </Text>
                                </View>
                            )}
                            renderSectionHeader={({
                                section: { category },
                            }) => (
                                <View style={styles.header}>
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 18,
                                        }}
                                    >
                                        {category}
                                    </Text>
                                </View>
                            )}
                            contentContainerStyle={{ paddingBottom: 15 }} //untuk menmbah padding bawah pada list scrool view
                        ></SectionList>
                    </View>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        margin: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    headerSection: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        paddingVertical: 10,
    },
    btn: {
        marginHorizontal: 15,
        borderRadius: 9,
        padding: 7,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    header: {
        backgroundColor: "#f0f0f0",
        padding: 8,
    },
});
