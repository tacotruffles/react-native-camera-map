import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {

    const itemsOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} />
    ));

    return (
        <View style={styles.listContainer}>
            {itemsOutput}
        </View>
    );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;