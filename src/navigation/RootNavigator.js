import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashSCreen/SplashScreen";
import PATH from "./NavigationPath";
import TodoScreen from "../screens/TodoScreen/TodoScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PATH.SPLASH}>
                <Stack.Screen
                    name={PATH.SPLASH}
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={PATH.TODO_LIST}
                    component={TodoScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
