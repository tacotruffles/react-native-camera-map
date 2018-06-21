import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const listItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
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