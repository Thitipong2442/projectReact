import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { styles } from "../components/styles";

const SettingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>Setting Screen</Text>
                    <View style={{ width: "60%" }}>
                        <View style={{ margin: 5 }}>
                            <Button
                                title="Go to Home Tab"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                        <View style={{ margin: 5 }}>
                            <Button
                                title="Open News Screen"
                                onPress={() => navigation.navigate("")}
                            />
                        </View>
                        <View style={{ margin: 5 }}>
                            <Button
                                title="Open Profile Screen"
                                onPress={() =>
                                    navigation.navigate("ProfilePage")
                                }
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
            </View>
        </SafeAreaView>
    );
};

export default SettingScreen;
