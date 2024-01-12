// HomeScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BottomTabNavigator from '../navigator/BottomTabNavigator';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
  },
});

export default HomeScreen;

