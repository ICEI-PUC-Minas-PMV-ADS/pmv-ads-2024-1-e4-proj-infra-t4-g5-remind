// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/index';
import { UserProvider } from './src/context/UserContext';

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Router />
      </UserProvider>
    </NavigationContainer>
  );
}