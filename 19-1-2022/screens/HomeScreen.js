import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AboutScreen from "./AboutScreen";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="ios-home" size={30} color="#1974D2" />
            <Text>หน้าหลัก</Text>
            <Button
                title="Go to About"
                onPress={() =>
                    navigation.push("About", { email: "thitipong@tni.ac.th" })
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScreen;
