import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import Card from "../components/Card";

const FlashSale = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Flash{" "}
                    <Text style={{ color: "orange", fontWeight: "bold" }}>
                        Sale
                    </Text>
                </Text>
            </View>
            <View>
                <ScrollView
                    horizontal={true}
                    style={styles.cardSection}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card price={25000} stock={0} discount={30}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: "https://www.icalan.id/userfile/filemanager/14//dayeuh-lifestyle_1638418220-EfO9C.png",
                            }}
                        />
                    </Card>
                    <Card price={30000} stock={13} discount={15}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nlPQK8yevt76aF0Ai2Vuq8Lt9i9RdWnE9V9QAfZSvDOvBsfn89Zum2P6f2hEoKTO9n4",
                            }}
                        />
                    </Card>
                    <Card price={40000} stock={14} discount={40}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdU9WGfAWElxnvo1DQJleWAR4bvlD85f89AFSAI_NyHYZ4sUAd6cITYEMe7_4cOX6khGU",
                            }}
                        />
                    </Card>
                    <Card price={13000} stock={33} discount={35}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTac1EggYfN2xx9a6Yy2p2Mgxa_CkXrKnG6H8aB86uSw3qiWC2vBSXfCrL2sBKW_ucw98w",
                            }}
                        />
                    </Card>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    cardSection: {
        height: 190,
        display: "flex",
        padding: 2,
        flexDirection: "row",
    },
    title: {
        fontWeight: "bold",
        padding: 9,
        color: "red",
        fontSize: 20,
    },
    cardImage: {
        height: 150,
        width: "100%",
    },
});

export default FlashSale;
