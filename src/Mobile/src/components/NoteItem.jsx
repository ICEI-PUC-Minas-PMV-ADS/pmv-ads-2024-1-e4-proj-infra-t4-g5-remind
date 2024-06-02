import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const NoteItem = ({ titulo, descricao, userInfo }) => {
  const [isCircleFilled, setIsCircleFilled] = useState(false);
  const maxDescriptionLength = 75;

  const handleCirclePress = () => {
    setIsCircleFilled(!isCircleFilled);
  };

  const truncatedDescription = descricao.length > maxDescriptionLength
  ? descricao.substring(0, maxDescriptionLength) + '...'
  : descricao;

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCirclePress}> 
        <View style={[styles.circle, isCircleFilled && styles.filledCircle]} />
      </TouchableOpacity>


      <View style={styles.contentContainer}>
        <Text style={styles.titulo} numberOfLines={1}>{titulo}</Text>
        {/* <Text style={styles.descricao} numberOfLines={1}>{truncatedDescription}</Text> */}
        <Text style={styles.criador}>De: {userInfo?.nome}</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // Alinha verticalmente ao topo
    padding: 16, // Adiciona um espaçamento interno de 16px
    backgroundColor: '#FAFAFA',
    marginBottom: 8, // Adiciona um espaçamento inferior
    gap: 16, // Adiciona um espaçamento entre os elementos
    borderRadius: 16,
  },
  contentContainer: {
    display: 'flex', // Adiciona um display flex
    flex: 1, // Ocupa o espaço restante na linha
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os elementos horizontalmente

    
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5, // Adicione um espaçamento inferior
    flexShrink: 1
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    marginRight: 5,
    flexShrink: 1 // Adicione um espaçamento à direita
  },
  criador: {
    fontSize: 12,
    color: '#888',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2, // Adiciona borda
    borderColor: '#443368', // Cor da borda roxa
    marginRight: 10,
  },
  filledCircle: {
    backgroundColor: '#443368', // Preenche o círculo com a cor roxa
  },
  textContainer: {
    flex: 1, // Ocupa o espaço restante na linha
  },
});

export default NoteItem;
