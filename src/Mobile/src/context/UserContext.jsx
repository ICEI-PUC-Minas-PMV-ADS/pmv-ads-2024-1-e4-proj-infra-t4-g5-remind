import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getUser } from '../services/userServices';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(undefined); 
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('USER_TOKEN');
      await AsyncStorage.removeItem('USER_ID');
      setSigned(false);
      setUser(null);
      navigation.navigate('Login');
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // ... lidar com erro do AsyncStorage
    }
  }, [navigation]);

  useEffect(() => {
    const loadSigned = async () => {
      const localSigned = AsyncStorage.getItem('USER_TOKEN');
      setSigned(!!localSigned);

      const secureUserId = AsyncStorage.getItem('USER_ID');
      if (secureUserId) {
        const userInfo = await getUser(secureUserId);
        setUser(userInfo);
      }
    };

    loadSigned();
  }, []);

  return (
    <UserContext.Provider
      value={{ signed, setSigned, user, setUser, logout, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}