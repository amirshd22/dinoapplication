import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../Components/AppScreen";
import Character from "../Components/Character";
import RssFeed from "../Components/RssFeed";
import Clock from "../Components/Clock";
import MusicPlayer from "../Components/MusicPlayer";

export default function HomeScreen() {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.characterContainer}>
        <Character />
      </View>
      <View style={styles.rssFeed}>
        <RssFeed />
      </View>
      <View style={styles.clock}>
        <Clock />
      </View>
      <View style={styles.musicPlayer}>
        <MusicPlayer />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  characterContainer: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  rssFeed: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  clock: {
    position: "absolute",
    bottom: 150,
    left: "50%",
    marginLeft: -100,
  },
  musicPlayer: {
    position: "absolute",
    bottom: 50,
    left: "50%",
    marginLeft: -250,
  },
});
