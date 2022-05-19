import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
   
      <WelcomeScreen/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
