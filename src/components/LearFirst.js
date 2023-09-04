import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from "react-native";
import ExampleComponent, { Greeting } from "./src/components/ExampleComponent";
import ClassComponent from "./src/components/ClassComponent";
import exampleStyle from "./src/components/ExampleStyle";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.parentTitle}>
                        Open up App.js to start working on your App woe{" "}
                        <Text style={styles.childTitle}>
                            Ini text anak atau subtitle
                        </Text>{" "}
                    </Text>
                    <Text style={[exampleStyle.title]}>Holaa</Text>
                    <ExampleComponent />
                    <Greeting />
                    <ClassComponent />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Isi disini isinya"
                    />
                    <Text>Mengapaaaa jadi </Text>

                    <Image
                        source={{
                            uri: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
                            width: 300,
                            height: 100,
                        }}
                    />

                    <Image
                        source={require("./assets/person.png")}
                        style={{ width: 200, height: 200, marginTop: 20 }}
                    />

                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        borderWidth: 1,
        width: "90%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    parentTitle: {
        color: "red",
        fontSize: 18,
    },
    childTitle: {
        color: "blue",
        fontSize: 12,
    },
});
