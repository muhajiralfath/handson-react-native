// import { FlatList, StyleSheet, Text, View } from "react-native";
// import React from "react";
import Todo from "./Todo";

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TodoList(props) {
    const { todos, toggleComplete, deleteTodo, type } = props;
    const getVissibleTodos = () => {
        switch (type) {
            case "All":
                return todos;
            case "Complete":
                return todos.filter((todo) => todo.complete);
            case "Active":
                return todos.filter((todo) => !todo.complete);
        }
    };
    return (
        <FlatList
            data={getVissibleTodos()}
            renderItem={({ item }) => (
                <Todo
                    todo={item}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => <Text>Data Kosong</Text>}
        />
    );
}

const styles = StyleSheet.create({});
