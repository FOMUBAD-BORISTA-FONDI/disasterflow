import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Succesfull = () => {
  return (
    <View style={styles.container}>
      <Text>Succesfull Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Succesfull;