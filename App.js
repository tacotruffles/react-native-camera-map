import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  
  state = {
    //places: ["San Diego","Los Angeles","Madrid","Lisbon","Oviedo","Milan","San Francisco","New York","Ipswitch","Mobile","Miami","Charlotte","San Jose","Seattle","Portland","Dallas","Austin","Houston"]
    places: [],
    placeSelected: null
  };

  

  placeAddedHandler = placeName => {
    this.setState(prevState => {

      const newPlace = prevState.places.concat({
        key: Math.random().toString(), 
        name: placeName,
        image: {
          uri: "https://c2.staticflickr.com/2/1489/24690903966_8a20c137fa_n.jpg"//placeImage
        }
      });
      
      return {
        places: newPlace
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== this.state.placeSelected.key;
        }),
        placeSelected: null
      }
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        placeSelected: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({placeSelected: null});
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.placeSelected} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
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
