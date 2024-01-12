// src/navigation/AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/Mapscreen';
import Report from '../screens/Report';
import ResHome from '../screens/responder/responder';
import ChatScreen from '../screens/responder/ChatScreen';
import MapDirections from '../screens/responder/MapDrirectionScreen';
import Notifications from '../screens/responder/Notifications';
import Profile from '../screens/responder/Profile';
import CreateTeam from '../screens/responder/CreateTeam';
import Responder from '../screens/responder/ResponseScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="report" component={Report} />
      <Stack.Screen name="res" component={ResHome} />
      <Stack.Screen name="notif" component={Notifications} />
      <Stack.Screen name="chat" component={ChatScreen} />
      <Stack.Screen name="direct" component={MapDirections} />
      <Stack.Screen name="prof" component={Profile} />
      <Stack.Screen name="team" component={CreateTeam} />
      <Stack.Screen name="Response" component={Responder} />
      </Stack.Navigator>
  );
};

export default AuthNavigator;
