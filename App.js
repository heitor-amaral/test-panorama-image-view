import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PanoramaView } from "@lightbase/react-native-panorama-view";

export default function App() {
  return (
    <View style={styles.container}>
      <PanoramaView
        style={{ flex: 1 }}
        dimensions={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width
        }}
        inputType="mono"
        // imageUrl="http://localhost:53469/IMG_20200130_104908_00_merged.jpg"
        imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
