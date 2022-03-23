import React from 'react';
import {ActivityIndicator, StyleSheet, Dimensions, View} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#A3D063" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
});
