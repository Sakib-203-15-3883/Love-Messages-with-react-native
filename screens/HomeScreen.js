import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#4e54c8', '#8f94fb']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 29,
  },
});

export default HomeScreen;
