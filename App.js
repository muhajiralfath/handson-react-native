import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function App() {
    return (
        <>
            <View style={[styles.header]}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Belajar flex React Native
                </Text>
            </View>
            <View style={styles.container}>
                <View style={[{ backgroundColor: "blue" }, styles.box]}></View>
                <View style={[[{ backgroundColor: "red" }, styles.box]]}></View>
                <View
                    style={[[{ backgroundColor: "green" }, styles.box]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "yellow" }, styles.box]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "violet" }, styles.box]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "aqua" }, styles.box]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "black" }, styles.box]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "purple" }, styles.box]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "black" }, styles.box]]}
                ></View>

                <StatusBar style="auto" />
            </View>

            <View style={styles.footer}>
                <View
                    style={[{ backgroundColor: "blue" }, styles.boxTwo]}
                ></View>
                <View
                    style={[[{ backgroundColor: "red" }, styles.boxTwo]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "green" }, styles.boxTwo]]}
                ></View>
                <View
                    style={[[{ backgroundColor: "yellow" }, styles.boxTwo]]}
                ></View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "center",
    },
    box: {
        width: 100,
        height: 100,
        margin: 3,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap-reverse",
        justifyContent: "flex-end",
    },
    boxTwo: {
        flex: 1,
        width: 80,
        height: 60,
    },
});
