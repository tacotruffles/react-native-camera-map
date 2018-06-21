import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        margin: 5,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default listItem;