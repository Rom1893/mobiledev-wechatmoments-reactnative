// TopBar.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CameraSvg from '../../Assets/svgs/CameraSvg';
import LeftArrowSvg from '../../Assets/svgs/LeftArrowSvg';
// Replace with actual path

const TopBar = () => {
  return (
    <View style={styles.container}>
      <LeftArrowSvg />
      <Text style={styles.title}>Moments</Text>
      <CameraSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: '#313237',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10, // Add padding on the sides
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default TopBar;
