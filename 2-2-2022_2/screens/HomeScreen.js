import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { styles } from "../components/styles";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>Home Screen</Text>
                    <View style={{ width: "60%" }}>
                        <View style={{ margin: 5 }}>
                            <Button
                                title="Go to setting Tab"
                                onPress={() => navigation.navigate("Settings")}
                            />
                        </View>
                        <View style={{ margin: 5 }}>
                            <Button
                                title="Open News Screen"
                                onPress={() => navigation.navigate("")}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
