// Navigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';

import AboutScreen from './screens/AboutScreen';
import Plan1 from './screens/Plan1';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />

          <Tab.Screen name=" random girls" component={Plan1} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Navigation;
