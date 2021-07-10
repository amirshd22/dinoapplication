import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";

export default function MusicPlayer() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/death-bed.jpg")}
          style={styles.image}
        />
        <Text style={{ color: colors.secondary, textAlign: "left" }}>
          Death bed , powfu
        </Text>
      </View>
      <View>
        <Text style={{ color: colors.secondary }}>
          Don't stay awake for too long, don't go to bed I'll make a cup of
          coffee for your head It'll get you up and going out of bed
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 250,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    width: "100%",
  },
  image: {
    width: 75,
    height: 75,
    marginHorizontal: 25,
  },
});
