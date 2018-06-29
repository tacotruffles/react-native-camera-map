import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

// Load screens
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

// Load Redux Store Config
import configureStore from "./src/store/conigureStore";
const store = configureStore();

// Register App Screens
Navigation.registerComponent("camera-map.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("camera-map.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("camera-map.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("camera-map.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("camera-map.SideDrawer", () => SideDrawer);

// Start App - single screen for now
Navigation.startSingleScreenApp({
	screen: {
		screen: "camera-map.AuthScreen",
		title: "Login"
	}
});
