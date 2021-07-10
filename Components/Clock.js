import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function Clock() {
  return (
    <View style={styles.container}>
      <Text style={styles.clock}>10:34</Text>
      <Text style={styles.date}>july 9</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
  clock: {
    fontSize: 36,
    color: colors.secondary,
    textAlign: "center",
  },
  date: {
    fontSize: 45,
    color: colors.secondary,
    textAlign: "center",
  },
});
