import { createStackNavigator } from "react-navigation";
import WelcomeScreen from "./pages/WelcomeScreen";
import HomeScreen from "./pages/HomeScreen";
import MedicalRecordsScreen from "./components/MedicalRecords";
import CreateMedicalRecordsScreen from "./components/CreateMedicalRecords";
const Navigation = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: { screen: HomeScreen },
  Medical: { screen: MedicalRecordsScreen },
  CreateRecord: { screen: CreateMedicalRecordsScreen }
});

export default Navigation;
