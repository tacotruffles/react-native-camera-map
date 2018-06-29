import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
	loginHandler = () => {
		startMainTabs();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Please Log In</Text>
				<Button title="Switch to Login" />
				<TextInput placeholder="Your E-mail Address" />
				<TextInput placeholder="Password" />
				<TextInput placeholder="Confirm Password" />
				<Button title="Submit" onPress={this.loginHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//vertical alignment
		justifyContent: "center",
		// Horizontal alignment
		alignItems: "center"
	}
});

export default AuthScreen;
