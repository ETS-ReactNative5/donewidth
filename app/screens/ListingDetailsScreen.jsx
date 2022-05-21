import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/redJacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$ 100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/bahani.jpg")}
            title="Bahani Billel"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 30,
    fontWeight: "700",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer:{
      marginVertical:40,
  }
});
export default ListingDetailsScreen;
