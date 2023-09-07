import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const ProductForm = ({ onCancel, onAddProduct }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [nameError, setNameError] = useState("");
    const [priceError, setPriceError] = useState("");

    const handleProduct = () => {
        if (name.trim() === "" || price.trim() === "") {
            Alert.alert("Error Add Products");
        } else if (name.length < 3 || name.length > 50) {
            setNameError("Nama Product harus antara 3 sampai 50 caracter");
        } else if (parseFloat(price) < 1) {
            setPriceError("Harga minima; 1 rupiah");
        } else {
            const newProduct = {
                category,
                data: [{ name, price }],
            };

            onAddProduct(newProduct);
            setCategory("");
            setName("");
            setPrice("");
        }
    };

    const isErrorView = (errorValidation) => {
        if (errorValidation) {
            return (
                <Text style={{ color: "red", marginBottom: 7 }}>
                    {errorValidation}
                </Text>
            );
        }
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Makanan", value: "Makanan" },
        { label: "Minuman", value: "Minuman" },
        { label: "Minuman Bersoda", value: "Minuman Bersoda" },
    ]);

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
                    <DropDownPicker
                        style={styles.input}
                        dropDownContainerStyle={{
                            borderColor: "transparent",
                            borderWidth: 0,
                        }}
                        placeholder="Pilih Kategori"
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={(val) => {
                            setCategory(val);
                            setValue(val);
                        }}
                        setItems={setItems}
                    />
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(val) => {
                            setName(val);
                            setNameError("");
                        }}
                    />
                    {isErrorView(nameError)}
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        keyboardType="numeric"
                        onChangeText={(val) => {
                            setPrice(val);
                            setPriceError("");
                        }}
                    />
                    {isErrorView(priceError)}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 6,
                            gap: 20,
                        }}
                    >
                        <TouchableOpacity style={styles.btn} onPress={onCancel}>
                            <Text style={{ color: "white" }}>Batal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text
                                style={{ color: "white" }}
                                onPress={handleProduct}
                            >
                                Tambah
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    btn: {
        backgroundColor: "#233d90",
        padding: 10,
        borderRadius: 10,
    },
});
