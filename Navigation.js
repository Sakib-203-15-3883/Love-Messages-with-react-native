import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Text } from 'react-native'; // Add this import
import HomeScreen from './screens/HomeScreen';
import Plan1 from './screens/Plan1';
import Plan2 from './screens/Plan2';
import Plan3 from './screens/Plan3';
import Plan4 from './screens/Plan4';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = focused ? '🏠' : '🏚️';
      break;
    case ' Random girls':
      iconName = focused ? '👩‍🌾' : '👩‍🌾';
      break;
    case ' Senior':
      iconName = focused ? '👩‍💻' : '👩‍💻';
      break;
    case ' Junior':
      iconName = focused ? '👩‍🎤' : '👩‍🎤';
      break;
    case ' classMate':
      iconName = focused ? '👫' : '👭';
      break;
    case 'About':
      iconName = focused ? '💀' : '💀';
      break;
    default:
      iconName = '';
  }
  return <Text style={{ fontSize: 24 }}>{iconName}</Text>;
};

const getHeaderTitle = (route) => {
  switch (route.name) {
    case 'Home':
      return 'Home Screen 🏠';
    case ' Random girls':
      return ' 🤡Impress Random Girls/Boys 👩‍🦰';
    case ' Senior':
      return ' 😻😻Impress Senior Girls/Boys🤑';
    case ' Junior':
      return '  ☘️Impress Junior Girls/Boys🙃🔥';
    case ' classMate':
      return '   🤭🥴Impress ClassMate👫👻';
    case 'About':
      return 'About Screen ℹ️';
    default:
      return '';
  }
};


const Navigation = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: { paddingVertical: -20, height: 50 }, // Adjust the padding and height as needed
            labelStyle: { fontSize: 11 }, // Adjust the font size as needed
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
            headerTitle: getHeaderTitle(route),
          })}
        >
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
