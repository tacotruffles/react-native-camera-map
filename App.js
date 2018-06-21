import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  
  state = {
    places: ["San Diego","Los Angeles","Madrid","Lisbon","Oviedo","Milan","San Francisco","New York","Ipswitch","Mobile","Miami","Charlotte","San Jose","Seattle","Portland","Dallas","Austin","Houston"]
  };

  

  placeAddedHandler = placeName => {
    this.setState(prevState => {

      const newPlace = prevState.places.concat(placeName)
      
      return {
        places: newPlace
      }
    })
  }

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
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
