import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
	render() {
		return (
			<View style={styles.drawerContainer}>
				<Text>SideDrawer Text</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	drawerContainer: {
		width: Dimensions.get("window").width * 0.8, // Android requires width or it crashes
		height: "100%",
		backgroundColor: "white"
	}
});

export default SideDrawer;
