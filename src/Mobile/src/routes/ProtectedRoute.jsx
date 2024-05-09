import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import useUser from '../context/UserContextHook';
import { useNavigation } from '@react-navigation/native';

export default function ProtectedRoute({ children }) {
  const { signed } = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    if (signed === false) {
      navigation.navigate('Login');
    }
  }, [signed, navigation]);

  if (signed === undefined) {
    return <View><ActivityIndicator /></View>; // Loading
  }

  return signed ? children : null;
}