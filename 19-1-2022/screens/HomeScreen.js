import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AboutScreen from "./AboutScreen";
import { Ionicons } from "@expo/vector-icons";

import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
    // the props here come from <Item ... />
    // you may access them and pass something else to HeaderButton if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                        title="menu"
                        iconName="menu"
                        onPress={() => alert("เมนูการทำงาน")}
                    />
                </HeaderButtons>
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                        title="register"
                        iconName="person-add"
                        onPress={() => alert("ลงทะเบียน")}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

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
