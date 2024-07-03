import { Image, StyleSheet, Platform, StatusBar } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", padding: 10 }}>heeeeeeeeeeeeeeeeeeeeeifg</Text>
      <StatusBar backgroundColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: '#000ef',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
