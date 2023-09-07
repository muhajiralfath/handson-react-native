import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";

const ProductForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoSection}>
                <Image
                    source={require("../../assets/formimage.png")}
                    style={{ width: "80%", height: 150 }}
                />
            </View>
            <View style={{ flex: 4, paddingHorizontal: 15 }}>
                <View style={styles.form}>
                    <View style={styles.headerForm}>
                        <Text>Tambah Data Product</Text>
                    </View>
                    <Text style={styles.label}>Kategori</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input} keyboardType="numeric" />
                </View>
            </View>
        </View>
    );
};

export default ProductForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoSection: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        backgroundColor: "#e6e6e6",
        padding: 25,
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    headerForm: {
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 0,
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 0.5,
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
        backgroundColor: "white",
    },
});
