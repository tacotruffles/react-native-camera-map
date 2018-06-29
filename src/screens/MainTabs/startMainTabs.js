import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
	// ios-share-alt

	Promise.all([
		Icon.getImageSource("md-map", 30),
		Icon.getImageSource("ios-share-alt", 30),
		Icon.getImageSource("ios-menu", 30)
	]).then(sources => {
		Navigation.startTabBasedApp({
			tabs: [
				{
					screen: "camera-map.FindPlaceScreen",
					label: "Find",
					title: "Find Place",
					icon: sources[0],
					navigatorButtons: {
						leftButtons: [
							{
								icon: sources[2],
								title: "Menu",
								id: "sideDrawerToogle"
							}
						]
					}
				},
				{
					screen: "camera-map.SharePlaceScreen",
					label: "Share",
					title: "Share Place",
					icon: sources[1],
					navigatorButtons: {
						leftButtons: [
							{
								icon: sources[2],
								title: "Menu",
								id: "sideDrawerToogle"
							}
						]
					}
				}
			],
			drawer: {
				left: {
					screen: "camera-map.SideDrawer"
				}
			}
		});
	});
};

export default startTabs;
