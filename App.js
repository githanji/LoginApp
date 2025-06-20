import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator();

// Linking config for GitHub Pages
const linking = {
  prefixes: ['https://githanji.github.io/LoginApp/'],
  config: {
    screens: {
      Welcome: '',
      Login: 'login',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
