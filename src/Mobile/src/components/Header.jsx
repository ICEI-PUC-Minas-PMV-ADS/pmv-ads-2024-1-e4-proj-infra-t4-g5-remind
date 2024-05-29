import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListaIcon from '../assets/icons/ListaIcon';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Lupa</Text>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.title}>Notificação</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0', // Cor de fundo do header
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
