import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function RssFeed() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          NHS Covid app may change as rules change, Grant Shapps says
        </Text>
        <Text style={styles.content}>
          The transport secretary says the app's sensitivity may need to be
          reduced as restrictions change
        </Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>
          NHS Covid app may change as rules change, Grant Shapps says
        </Text>
        <Text style={styles.content}>
          The transport secretary says the app's sensitivity may need to be
          reduced as restrictions change
        </Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>
          NHS Covid app may change as rules change, Grant Shapps says
        </Text>
        <Text style={styles.content}>
          The transport secretary says the app's sensitivity may need to be
          reduced as restrictions change
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    width: 300,
    height: 400,
    justifyContent: "space-evenly",
    padding: 10,
  },
  title: {
    color: colors.secondary,
    marginLeft: 5,
  },
  content: {
    color: colors.secondary,
    opacity: 0.7,
    fontSize: 12,
    flexWrap: "wrap",
    marginLeft: 7,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: colors.secondary,
    opacity: 0.2,
  },
});
