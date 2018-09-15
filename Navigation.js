import { createStackNavigator } from "react-navigation";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "./HomeScreen";
const Navigation = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: { screen: HomeScreen }
});

export default Navigation;
