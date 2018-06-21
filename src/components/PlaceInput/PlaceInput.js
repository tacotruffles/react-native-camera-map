import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: ""
    };

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    }

    placeAddedHandler = () => {
        if(this.state.placeName.trim() === "") {
          return;
        }

        this.props.onPlaceAdded(this.state.placeName);

        // Clear the input field after passing it to the above f(x) ref
        this.setState({placeName: ""});
      }
    
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="Awesome Place"
                    value={this.state.placeName} 
                    onChangeText={this.placeNameChangedHandler}
                  />
                  <Button 
                    title="Add"
                    color="red"
                    style={styles.placeButton}
                    onPress={this.placeAddedHandler}
                  />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%",
    }
});

export default PlaceInput;