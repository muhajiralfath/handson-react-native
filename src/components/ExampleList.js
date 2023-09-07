import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ExampleList() {
    const brands = ["Suzuki", "Honda", "Nissan", "Yamaha", "Mitsubishi"];

    const cars = [
        {
            name: "camry",
            brand: "Suzuki",
        },
        {
            name: "Jhon",
            brand: "Toyota",
        },
        {
            name: "Corolla",
            brand: "Mitsubhishi",
        },
        {
            name: "Civic",
            brand: "Honda",
        },
        {
            name: "C-RV",
            brand: "Honda",
        },
    ];

    const listBrands = brands.map((brand) => {
        return <Text style={styles.brand}>{brand}</Text>;
    });

    const listBrandsWithKey = brands.map((brand, key) => (
        <Text style={styles.brand}>
            {key} . {brand}
        </Text>
    ));

    const filterCars = cars.filter((car) => car.brand == "Honda");
    const showFilter = filterCars.map((car, i) => (
        <View key={i} style={styles.carBrand}>
            <Text>Name: {car.name}</Text>
            <Text>Brand: {car.brand}</Text>
        </View>
    ));

    return (
        <View style={styles.container}>
            <Text>List of Brand</Text>
            {/*{listBrands}*/}
            {showFilter}

            <Text>Contoh FlatList</Text>
            <FlatList
                data={cars}
                // keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                numColumns={3}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    brand: {
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: "400",
    },
    carBrand: {
        // height:90,
        // width:90,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 10,
        margin: 3,
        padding: 5,
    },
});
