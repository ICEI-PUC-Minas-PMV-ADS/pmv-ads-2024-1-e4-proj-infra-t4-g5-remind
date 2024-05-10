import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, user, setUser, logout } = context;
  return { signed, setSigned, user, setUser, logout };
}