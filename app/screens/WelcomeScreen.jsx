import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
    blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/doneLogo.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login"  />
        <AppButton title="Register"  color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer:{
padding:20,
width:"100%",
  },
  logo: {
    width: 200,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20,
  }
});

export default WelcomeScreen;
