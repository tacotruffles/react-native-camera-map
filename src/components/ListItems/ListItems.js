import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from './ListItem/ListItem';

const listItems = (props) => {

    const itemsOutput = props.items.map((item, i) => (
        <ListItem key={i} placeName={item} />
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

export default listItems;