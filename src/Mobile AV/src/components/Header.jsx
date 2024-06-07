import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,FlatList  } from 'react-native';
import { useUser } from '../context/UserContext'; 
import { Ionicons } from '@expo/vector-icons';
import ListaIcon from '../assets/icons/ListaIcon';

const Header = ({ title }) => {
  const { user, logout } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  const handleGearPress = () => {
    setShowLogout(!showLogout);
  };

  const logoutOptions = [
    { id: 'logout', title: 'Sair' },
  ];

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Bem-vindo, {user?.nome}!</Text>
      </View>

      <TouchableOpacity onPress={handleGearPress}>
        <ListaIcon />
      </TouchableOpacity>

      {showLogout && (
        <FlatList
          data={logoutOptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={logout} style={styles.logoutOption}>
              <Text style={styles.logoutOptionText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          style={styles.logoutOptionsContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
  },
  leftContainer: { // Novo container para alinhar o ícone e o texto
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Adiciona um espaçamento à esquerda do texto
  },
  logoutOptionsContainer: {
    position: 'absolute',
    top: 50, // Ajuste a posição conforme necessário
    right: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  logoutOption: {
    padding: 10,
  },
  logoutOptionText: {
    fontSize: 16,
  },
});

export default Header