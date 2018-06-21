import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends Component {
  
  state = {
    //places: ["San Diego","Los Angeles","Madrid","Lisbon","Oviedo","Milan","San Francisco","New York","Ipswitch","Mobile","Miami","Charlotte","San Jose","Seattle","Portland","Dallas","Austin","Houston"]
    places: []
  };

  

  placeAddedHandler = placeName => {
    this.setState(prevState => {

      const newPlace = prevState.places.concat({
        key: Math.random().toString(), 
        name: placeName,
        image: placeImage
      });
      
      return {
        places: newPlace
      }
    })
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter((place, i) => {
          return place.key !== key;
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
