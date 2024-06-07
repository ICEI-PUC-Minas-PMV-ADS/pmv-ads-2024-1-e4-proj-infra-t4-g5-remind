import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { completeNote } from '../services/noteServices';
import { messageDateDiffInMinutes } from '../utils';
import { Modal } from 'react-native';
import { useUser } from '../context/UserContext';
import { Ionicons } from '@expo/vector-icons';

export default function ModalNote({ open, setOpen, note }) {
  const { user } = useUser();
  
  if (note) {
    note.remainingMessage = messageDateDiffInMinutes(note?.datafinal);
  }

  const showCompleteButton = note?.destinatario === user?._id && note?.situacao !== 'concluido'; // Condition for showing button

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={setOpen}>
      <View style={styles.container}> 
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={setOpen}>
            <Ionicons name="arrow-back" size={24} color={"#FFF"} /> 
          </TouchableOpacity>
          <Text style={styles.HeaderTitle} >Nota</Text>
          

          
        </View>
        <View style={styles.modal}>   
         <Text style={styles.title}>{note?.titulo || 'Título'}</Text>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfo}>
              <Text style={styles.user} >USER</Text>
              <Text style={styles.userInitial}>{note?.userInfo.nome[0] || '@'}</Text>
              <Text style={styles.userName}>{note?.userInfo.nome || 'Nome'}</Text>

            </View>
            <View style={styles.userInfo}>
              <Text style={styles.user}>EST DATE</Text>
              {note?.situacao === 'pendente' && note?.remainingMessage === 'Atrasada' ? 
              <Text style={styles.remainingMessage}>Atrasada</Text> : null
              }

              
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
          <View style={styles.buttonContainer}>
            {showCompleteButton && (
              <Button title="Concluir" onPress={() => {
                completeNote(note._id)
                  .then(() => {
                    setOpen(false);
                    Toast.show({
                      type: 'success',
                      text1: 'Nota concluída!',
                      text2: 'A nota foi concluída com sucesso.',
                    });
                  })
                  .catch(() => {
                    Toast.show({
                      type: 'error',
                      text1: 'Erro ao concluir nota',
                      text2: 'Houve um erro ao tentar concluir a nota. Tente novamente.',
                    });
                  });
              }}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 16,
    alignSelf: 'center',
  },
  container: { // Modificado para centralizar o modal verticalmente
    flex: 1,
    backgroundColor: '#443368',
  },
  modal: {
    backgroundColor: '#FFF', // Cor de fundo branca para o conteúdo
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex : 1,
    padding: 16, // Adiciona um espaçamento interno

  },
  header: {
    backgroundColor: '#443368',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center', // Alinha os elementos ao
    textAlign: 'center',
  },
  title: {
    fontSize: 28, // Tamanho de fonte maior
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto horizontalmente
    padding: 8
  },
  HeaderTitle: {
    fontSize: 28,
    color: '#FFF',
    TextAlign: 'center',
    fontWeight : 'bold',
  },

  closeButton: {
    backgroundColor: '#00000',
    padding: 8,
    borderRadius: 8,
  },
  userInfoSection: {
    flexDirection: 'row',
    marginBottom: 20, // Espaçamento inferior
    justifyContent: 'space-between', // Distribui os elementos horizontalmente
    alignContent: 'flex-start'
    
  },
  userInfo: {
    justifyContent: 'space-between', // Distribui os elementos horizontalmente
    alignItems: 'center',
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
    flex: 1, // Ocupa o espaço restante na linha
    alignItems: 'flex-start', // Alinha os elementos à esquerda
    marginBottom: 20, // Espaçamento inferior
  },
  description: {
    fontSize: 16,
    textAlign: 'left', // Alinha o texto da descrição à esquerda
  },
  remainingMessage: {
    fontSize: 20,
    color: 'red',//red
    marginBottom: 16,
  },
  completeButtonContainer: {
    marginBottom: 16,
  },
  buttonContainer: {  // Novo estilo para o container do botão
    alignSelf: 'center',   // Centraliza o botão horizontalmente
    width: '100%',        // Garante que o botão ocupe a largura total
    marginBottom: 20,     // Adiciona margem inferior para separar o botão do conteúdo
  },
  
});