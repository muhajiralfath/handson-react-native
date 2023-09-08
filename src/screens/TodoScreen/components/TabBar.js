import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabBarItem from "../../../shared/components/TabBarItem";

const TabBar = ({ type, setType }) => {
    return (
        <View style={styles.container}>
            <TabBarItem
                type={type}
                title={"All"}
                setType={() => setType("All")}
            />
            <TabBarItem
                type={type}
                title={"Active"}
                setType={() => setType("Active")}
            />
            <TabBarItem
                type={type}
                title={"Complete"}
                setType={() => setType("Complete")}
            />
        </View>
    );
};

export default TabBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});
