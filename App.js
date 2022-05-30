import React from 'react';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        
      <TextInput
      placeholder='type a search'
      />
      </Screen>
      
    </GestureHandlerRootView>
  );
}
