import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";

const LearnFlexBox = () => {
    return (
        <View style={[styles.container]}>
            <Image
                source={{
                    uri: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
                    width: 300,
                    height: 100,
                }}
            />
            <TextInput style={[styles.textInput]} />
            {/* <Text style={[styles.content]}>LearnFlexBox</Text> */}
        </View>
    );
};

export default LearnFlexBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        borderWidth: 2,
        width: 320,
        height: 300,
    },
    textInput: {
        width: 200,
    },
});
