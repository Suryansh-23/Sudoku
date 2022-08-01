import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: string;

                            if (route.name === "Home") {
                                if (focused) {
                                    return (
                                        <Ionicons
                                            name="home"
                                            size={24}
                                            color={color}
                                        />
                                    );
                                } else {
                                    return (
                                        <Ionicons
                                            name="home-outline"
                                            size={24}
                                            color={color}
                                        />
                                    );
                                }
                            } else if (route.name === "Game") {
                                if (focused) {
                                    return (
                                        <Ionicons
                                            name="game-controller"
                                            size={24}
                                            color={color}
                                        />
                                    );
                                } else {
                                    return (
                                        <Ionicons
                                            name="game-controller-outline"
                                            size={24}
                                            color={color}
                                        />
                                    );
                                }
                            }
                        },
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Game" component={GameScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

