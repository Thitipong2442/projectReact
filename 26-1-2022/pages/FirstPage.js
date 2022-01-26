import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { styles } from "../components/styles";

const FirstPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>
                        This is the First Page
                    </Text>
                    <Button
                        title="Go to Second Page"
                        onPress={() => navigation.navigate("SecondPage")}
                    />
                    <Button
                        title="Go to Third Page"
                        onPress={() => navigation.navigate("ThirdPage")}
                    />
                </View>
                <Text style={styles.textBottomStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default FirstPage;
