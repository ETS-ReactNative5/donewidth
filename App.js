import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem
          title={'Billel Bahani'}
          subTitle={'Quality Manager'}
          ImageComponent={<Icon name={'email'} iconColor="white" />}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
