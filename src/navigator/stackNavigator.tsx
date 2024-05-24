// ../navigation/stackNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import Login from '../screens/Auth/Login';

export type StackNavigatorParams = {
  Login: undefined;
  welcome: undefined;
  // Ajoutez d'autres écrans ici si nécessaire
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_bottom' }} >
      <Stack.Screen name="welcome" component={Welcome} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
