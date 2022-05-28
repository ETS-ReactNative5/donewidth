import React from "react";
import {
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import  Constants  from "expo-constants";

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    decription: "D1",
    image: require("../assets/bahani.jpg"),
  },
  {
    id: 2,
    title: "T2",
    decription: "D2",
    image: require("../assets/bahani.jpg"),
  },
];

function MessagesScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    //   paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop:Constants.statusBarHeight
    
    }
});
export default MessagesScreen;
