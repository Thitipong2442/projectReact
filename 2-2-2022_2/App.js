import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from "react-native-reanimated";

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import Image1 from "./assets/logo1.png";
import Image2 from "./assets/logo2.png";
import Image3 from "./assets/logo3.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FristScreen() {
    return (
        <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "green",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="HomePage"
                component={HomeScreen}
                options={{ title: "Home Page" }}
            />
        </Stack.Navigator>
    );
}

function SecondScreens() {
    return (
        <Stack.Navigator
            initialRouteName="SettingPage"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "green",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="SettingPage"
                component={SettingScreen}
                options={{ title: "Setting Page" }}
            />
            <Stack.Screen
                name="ProfilePage"
                component={ProfileScreen}
                options={{ title: "Profile Page" }}
            />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? Image1 : Image2;
                        } else if (route.name === "Settings") {
                            iconName = focused ? Image1 : Image3;
                        }
                        return (
                            <Image
                                source={iconName}
                                color={color}
                                style={{ width: 30, height: 30 }}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "green",
                    inactiveTinrColor: "grey",
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={FristScreen}
                    options={{ title: "Home" }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SecondScreens}
                    options={{ title: "Setting" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
