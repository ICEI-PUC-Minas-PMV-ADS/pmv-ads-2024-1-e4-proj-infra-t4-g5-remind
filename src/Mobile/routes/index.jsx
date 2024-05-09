import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importe suas telas
import Login from '../pages/Login';


const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}