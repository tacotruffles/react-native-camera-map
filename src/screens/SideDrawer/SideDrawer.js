import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
	render() {
		return (
			// Android requires width or it crashes and separate for device rotation
			<View style={[styles.drawerContainer, { width: Dimensions.get("window").width * 0.8 }]}>
				<Text>SideDrawer Text</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	drawerContainer: {
		flex: 1,
		paddingTop: 22,
		backgroundColor: "white"
	}
});

export default SideDrawer;
