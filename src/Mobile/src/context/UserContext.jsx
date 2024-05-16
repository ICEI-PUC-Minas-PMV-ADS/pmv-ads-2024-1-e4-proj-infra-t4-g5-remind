import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { getUser } from '../services/userServices';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

export const UserContext = createContext();

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children }) {
  const [signed, setSigned] = useState(undefined); 
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  

  const logout = useCallback(async () => {
    try {
      await SecureStore.deleteItemAsync('USER_TOKEN');
      await SecureStore.deleteItemAsync('USER_ID');
      setSigned(false);
      setUser(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // ... lidar com erro do AsyncStorage
    }
  }, [navigation]);

  useEffect(() => {
    const loadSigned = async () => {
      const secureSigned = await SecureStore.getItemAsync('USER_TOKEN');
      setSigned(!!secureSigned);
  
      const secureUserId = await SecureStore.getItemAsync('USER_ID');
      if (secureUserId) {
        const userInfo = await getUser(secureUserId);
        setUser(userInfo);
      }
    };
  
    loadSigned();
  }, []);

  return (
    <UserProvider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        signed,
        setSigned,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </UserProvider>
  );
}