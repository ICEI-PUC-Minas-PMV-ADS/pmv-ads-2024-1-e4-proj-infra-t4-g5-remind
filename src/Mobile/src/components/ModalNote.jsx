import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { completeNote } from '../services/noteServices';
import { messageDateDiffInMinutes } from '../utils';
import { Modal } from 'react-native'; 

export default function ModalNote({ open, setOpen, note }) {
  if (note) {
    note.remainingMessage = messageDateDiffInMinutes(note?.datafinal);
  }

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={setOpen}>
      <View style={styles.container}> 
        <View style={styles.modal}>
          <Text style={styles.title}>{note?.titulo || 'Título'}</Text>

          <View style={styles.userInfoSection}>
            <View style={styles.userInfo}>
              <Text style={styles.user} >USER</Text>
              <Text style={styles.userInitial}>{note?.userInfo.nome[0] || '@'}</Text>

            </View>
            <View style={styles.userInfo}>
              <Text style={styles.user}>EST DATE</Text>
              <Text style={styles.estDate}>
                {new Date(note?.datafinal).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }) || 'dd.mm.yyyy'}
              </Text>
            </View>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.user}>Descrição</Text>
            <Text style={styles.description}>{note?.descricao || 'Descrição'}</Text>
          </View>

          {/* ... (Botão "Concluir Tarefa" se necessário) */}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Posiciona o modal no final da tela (sobre a navbar)
    backgroundColor: 'transparent', // Fundo transparente para que a navbar seja visível
  },
  modal: {
    backgroundColor: '#FFF', // Cor de fundo branca para o conteúdo
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16,
    height: '90%', // Ocupa 80% da altura da tela
    width: '100%', // Ocupa toda a largura da tela
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    width: '100%',
    textAlign: 'center', // Centraliza o texto
    fontSize: 28, // Tamanho de fonte maior
    fontWeight: 'bold',
    marginBottom: 20, // Espaçamento inferior
  },
  closeButton: {
    backgroundColor: '#00000',
    padding: 8,
    borderRadius: 8,
  },
  userInfoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribui os elementos horizontalmente
    marginBottom: 20, // Espaçamento inferior
  },
  userInfo: {
    justifyContent: 'space-between', // Distribui os elementos horizontalmente
    alignItems: 'flex-start'
  },
  user: {
    fontSize: 14,
    color: '#888', // Cor mais clara para a data
  },
  userInitial: {
    backgroundColor: '#EEE',
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    width: 40, // Define a largura
    height: 40, // Define a altura
    borderRadius: 20, // Define o borderRadius como metade da largura/altura para criar um círculo
    textAlign: 'center', // Centraliza o texto horizontalmente
    lineHeight: 40, // Centraliza o texto verticalmente
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  estDate: {
    fontSize: 14,
    color: '#888', // Cor mais clara para a data
  },
  descriptionSection: {
    alignItems: 'flex-start', // Alinha os elementos à esquerda
    marginBottom: 20, // Espaçamento inferior
  },
  description: {
    fontSize: 16,
    textAlign: 'left', // Alinha o texto da descrição à esquerda
  },
  remainingMessage: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  completeButtonContainer: {
    marginBottom: 16,
  },
  
});