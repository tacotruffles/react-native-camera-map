import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import PlaceInput from "../../components/PlaceInput/PlaceInput";

class SharePlaceScreen extends Component {
	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	}

	onNavigatorEvent = event => {
		console.log(event);
		if (event.type === "NavBarButtonPress") {
			if (event.id === "sideDrawerToogle") {
				this.props.navigator.toggleDrawer({
					side: "left"
				});
			}
		}
		// switch (event.id) {
		// 	case "willAppear":
		// 		break;
		// 	case "didAppear":
		// 		break;
		// 	case "willDisappear":
		// 		break;
		// 	case "didDisappear":
		// 		break;
		// 	case "willCommitPreview":
		// 		break;
		// }
	};

	placeAddedHandler = placeName => {
		this.props.onAddPlace(placeName);
	};

	render() {
		return (
			<View>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: placeName => dispatch(actions.addPlace(placeName))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(SharePlaceScreen);
