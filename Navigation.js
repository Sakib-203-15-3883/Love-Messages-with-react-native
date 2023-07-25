// Navigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';

import AboutScreen from './screens/AboutScreen';
import Plan1 from './screens/Plan1';
import Plan2 from './screens/Plan2';
import Plan3 from './screens/Plan3';
import Plan4 from './screens/Plan4';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name=" Random girls" component={Plan1} />
          <Tab.Screen name=" Senior" component={Plan2} />
          <Tab.Screen name=" Junior" component={Plan3} />
          <Tab.Screen name=" classMate" component={Plan4} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Navigation;
