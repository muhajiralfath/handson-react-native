import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Card = ({ price, stock, discount, children }) => {
    const unavaliable = stock === 0 ? true : false;
    const imageChildren = children;
    return (
        <View style={styles.card}>
            {imageChildren}
            <View style={styles.cardContent}>
                <View style={styles.priceStockContainer}>
                    <View>
                        <Text style={styles.priceText}>
                            Rp.
                            <Text style={styles.boldPrice}>
                                {price || 9999}
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.stockText}>Stock {stock}</Text>
                    </View>
                </View>
            </View>
            <View
                style={[
                    styles.overlay,
                    unavaliable
                        ? {
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 35,
                              backgroundColor: "rgba(59, 56, 56, 0.7)",
                          }
                        : {
                              top: 0,
                              left: 120,
                              right: 0,
                              bottom: 155,
                              backgroundColor: "rgba(255, 0, 0, 0.7)",
                          },
                ]}
            >
                <View>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                    >
                        {unavaliable ? "Habis Cuy" : discount + "%"}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 170,
        borderRadius: 15,
        overflow: "hidden",
        marginHorizontal: 5,
    },
    cardContent: {
        paddingTop: 10,
        justifyContent: "flex-end",
        backgroundColor: "#f3f6f4",
    },
    priceStockContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    priceText: {
        fontSize: 15,
        color: "#f94c10",
        paddingLeft: 7,
    },
    stockText: {
        color: "#b9b4c7",
        fontWeight: "bold",
        alignSelf: "flex-end",
        padding: 5,
        backgroundColor: "orange",
        borderBottomRightRadius: 15,
        color: "white",
    },
    boldPrice: {
        fontWeight: "bold",
        fontSize: 20,
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 45,
        left: 0,
        right: 0,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Card;
