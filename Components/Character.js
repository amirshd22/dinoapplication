import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Character() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/hug.gif")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    zIndex: 5,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
