import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItems from './src/components/ListItems/ListItems';

export default class App extends Component {
  
  state = {
    places: []
  };

  

  placeAddedHandler = placeName => {
    this.setState(prevState => {

      const newPlace = prevState.places.concat(placeName)
      
      return {
        places: newPlace
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <ListItems items={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
