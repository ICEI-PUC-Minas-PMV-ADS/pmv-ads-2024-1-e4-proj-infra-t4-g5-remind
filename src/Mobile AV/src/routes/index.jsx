import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Importe suas telas
import Login from '../pages/Login';
import Home from '../pages/Home';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();


export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header title={route.name} />,
      })}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
