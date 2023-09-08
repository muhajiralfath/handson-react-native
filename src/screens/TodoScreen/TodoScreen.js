import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useState } from "react";
import styles from "./TodoScreen.style";
import TabBar from "./components/TabBar";
import TodoList from "./components/TodoList";

const todoDummy = [
    {
        id: 1,
        title: "Olahraga",
        complete: true,
    },
    {
        id: 2,
        title: "Ngoding",
        complete: false,
    },
    {
        id: 3,
        title: "Ngopskuy",
        complete: true,
    },
];

const TodoScreen = () => {
    const [appState, setAppState] = useState({
        type: "All",
        todos: [...todoDummy],
        inputValue: "",
    });

    const setType = (type) => {
        setAppState({ ...appState, type });
    };

    const toggleComplete = (todoIndex) => {
        const { todos } = appState;
        todos.forEach((todo) => {
            if (todo.id === todoIndex) {
                todo.complete = !todo.complete;
            }
        });

        setAppState({ ...appState, todos });
    };

    const deleteTodo = (todoIndex) => {
        const { todos: currentTodos } = appState;
        const newTodos = currentTodos.filter((todo) => todo.id !== todoIndex);
        setAppState({ ...appState, todos: newTodos });
    };

    const submitTodo = () => {
        console.log("test", appState.inputValue);
        const payload = {
            title: appState.inputValue,
            complete: false,
            id: appState.todos.length + 1,
        };

        console.log("test palyload", payload.title);

        const todos = [...appState.todos, payload];
        setAppState({ ...appState, todos, inputValue: "" });
    };

    const onChangeValue = (val) => {
        setAppState({ ...appState, inputValue: val });
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerSection}>
                <Text style={{ textAlign: "center", fontSize: 52 }}>Todos</Text>
            </View>
            {/* Form Add List */}
            <View style={styles.formSection}>
                <TextInput
                    value={appState.inputValue}
                    placeholder="New Todo"
                    onChangeText={onChangeValue}
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderColor: "black",
                        marginBottom: 5,
                    }}
                />
                <Button title="Submit" onPress={submitTodo} />
            </View>
            {/* List */}
            <View style={styles.listSection}>
                <TodoList
                    todos={appState.todos}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    type={appState.type}
                />
            </View>

            {/* tabBarSection */}
            <View style={styles.tabBarSection}>
                <TabBar type={appState.type} setType={setType} />
            </View>
        </View>
    );
};

export default TodoScreen;
