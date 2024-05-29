import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import CreateButton from '../assets/icons/CreateButton';
import SeadersIcon from '../assets/icons/SeadersIcon';

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.iconButton}>
          <HomeIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButtonContainer}>
          <CreateButton style={styles.createButton} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <SeadersIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute', // Posiciona a navbar de forma absoluta
    bottom: 0, // Coloca na parte inferior da tela
    left: 0, // Alinha à esquerda
    right: 0, // Alinha à direita (ocupa toda a largura)
    backgroundColor: '#ffffff', // Cor de fundo da navbar
    paddingHorizontal: 32,
    paddingVertical: 10,
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconButton: {
    padding: 10,
  },
  createButtonContainer: {
    position: 'relative',
    bottom: 25, // Eleva o botão central
  },
  createButton: {
    // Estilos para o ícone do botão central (cor, tamanho, etc.)
  },
});

export default Navbar;
