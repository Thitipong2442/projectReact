import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";

import axios from "axios";

import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    Button,
    Badge,
} from "native-base";

const DetailScreen = ({ navigation, route }) => {
    const { id, title } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // title:'รายละเอียดสินค้า' //set แบบ static
            title: title, //set แบบ dynamic
        });
    }, [navigation]);

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    //getData() for get data from backend
    const getData = async (id) => {
        setLoading(true);
        const res = await axios.get(
            "https://api.codingthailand.com/api/course/" + id
        );
        setDetail(res.data.data);
        setLoading(false);
    };

    //useEffect จะทำงานเมื่อคลิกที่เมนูสินค้า
    useEffect(() => {
        getData(id);
    }, [id]);

    const _onRefresh = () => {
        getData(id);
    };

    return (
        <View>
            <FlatList
                //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน Backend
                data={detail}
                keyExtractor={(item, index) => item.ch_id.toString()}
                onRefresh={_onRefresh}
                refreshing={loading}
                renderItem={({ item, index }) => (
                    <ListItem thumbnail>
                        <Left>
                            <Text>{index + 1}</Text>
                        </Left>
                        <Body>
                            <Text>{item.ch_title}</Text>
                            <Text note numberOfLines={1}>
                                {item.detail}
                            </Text>
                        </Body>
                        <Right>
                            <Badge danger>
                                <Text>{item.ch_view}</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                )}
            />
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({});
