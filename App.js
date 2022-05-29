import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";


export default function App() {
  return<GestureHandlerRootView>
    <MessagesScreen />
  </GestureHandlerRootView>;
}
