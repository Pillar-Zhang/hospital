import { createStackNavigator } from "react-navigation";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "./HomeScreen";
import MedicalRecordsScreen from "./components/MedicalRecords";
const Navigation = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: { screen: HomeScreen },
  Medical: { screen: MedicalRecordsScreen }
});

export default Navigation;
