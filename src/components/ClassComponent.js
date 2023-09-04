import { Component } from "react";
import { Button, Text, View, Alert } from "react-native";

export default class ClassComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{ color: "blue", fontSize: 20 }}>
                    Component dengan class component
                </Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() =>
                        Alert.alert("Button with adjusted color pressed")
                    }
                />
            </View>
        );
    }
}
