import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe suas telas
import Login from '../pages/Login'


const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}