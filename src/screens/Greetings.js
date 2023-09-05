import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Hello = (props) => {
    const fullName = props.fullName !== undefined ? props.fullName : "Agus";
    const company = props.company !== undefined ? props.company : "PT Hunian";

    return (
        <View style={styles.backgroundSection}>
            <Text>
                Hello my name is {fullName}, I'm from {company} my age is{" "}
                {props.age}
            </Text>
            {props.children}
        </View>
    );
};

const Greetings = () => {
    const dataProfile = {
        fullName: "Alfath",
        company: "EnigmaCamp",
        age: 20,
    };
    return (
        <View>
            <Hello {...dataProfile} />
            <Hello {...dataProfile}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    Hello I'm Children props
                </Text>
            </Hello>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundSection: {
        borderWidth: 2,
        borderColor: "red",
        margin: 2,
        padding: 2,
    },
});

export default Greetings;
