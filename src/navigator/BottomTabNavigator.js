// src/navigator/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import MapScreen from '../screens/Mapscreen';
import SafetyTipsScreen from '../screens/SafetyTipsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused ? 'home' : 'home'; // Use the Home icon for the Map screen
          } else if (route.name === 'SafetyTips') {
            iconName = focused ? 'info-circle' : 'info-circle';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          borderTopLeftRadius: 50, // Adjust the border radius as needed
          borderTopRightRadius: 50,
          marginTop: -25,
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          borderTopLeftRadius: 50, // Adjust the border radius as needed
          borderTopRightRadius: 60,
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false, // Hide the header for the Map screen
        }}
      />
      <Tab.Screen name="SafetyTips" component={SafetyTipsScreen} 
      options={{
        headerShown: false, 
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        headerShown: false, 
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
