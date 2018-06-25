import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    // ios-share-alt

    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "camera-map.FindPlaceScreen",
                    label: "Find",
                    title: "Find Place",
                    icon:  sources[0]
                },
                {
                    screen: "camera-map.SharePlaceScreen",
                    label: "Share",
                    title: "Share Place",
                    icon: sources[1] 
                }
            ]
        });
    })
};

export default startTabs;