import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { createNote } from '../services/noteServices'; 
import { getAllUsers } from '../services/userServices';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

export default function ModalNoteForm({ open, setOpen }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dataInicial, setDataInicial] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);
  const [selecionandoDataInicial, setSelecionandoDataInicial] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        // Ordena os usuários por nome antes de atualizar o estado
        const sortedUsers = usersData.sort((a, b) => a.nome.localeCompare(b.nome));
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };
    fetchUsers();
  }, []);

  const onDayPress = (day) => {
    if (selecionandoDataInicial) {
      setDataInicial(day.dateString);
      setSelecionandoDataInicial(false);
    } else {
      setDataFinal(day.dateString);
      setShowCalendar(false); // Fecha o calendário após selecionar a data final
    }
  };

  const handleUserPress = (user) => {
    setSelectedUser(user);
    setUserId(user._id);
  };

  const handleSubmit = async () => {
    if (!selectedUser || !dataInicial || !dataFinal) {
      Toast.show({
        type: 'error',
        text1: 'Preencha todos os campos',
      });
      return;
    }
    try {
      await createNote({
        titulo,
        descricao,
        destinatario: selectedUser._id,
        datainicial: `${dataInicial}T00:00:00.000Z`,
        datafinal: `${dataFinal}T00:00:00.000Z`,
        situacao: 'pendente'
      });
      setOpen(false);
      Toast.show({
        type: 'success',
        text1: 'Nota criada!',
        text2: 'A nota foi criada com sucesso.',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar nota',
        text2: 'Houve um erro ao tentar criar a nota. Tente novamente.',
      });
    }
  };

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={setOpen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={setOpen}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.HeaderTitle}>Criar Nova Nota</Text>
        </View>
        <View style={styles.modal}>
          <ScrollView>
          <Text style={styles.title}>Nome da nota</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />
          <Text style={styles.title}>Team member</Text>
          {/* FlatList Horizontal */}
          <FlatList
            data={users}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => handleUserPress(item)} 
                style={styles.userItem}
              >
              <View style={styles.Icon}>
                <View style={[styles.userInitialContainer,
                  selectedUser && selectedUser._id === item._id && styles.selectedItem // Estilo para item selecionado
                ]}
              > 
                  <Text style={styles.userInitial}>{item.nome[0].toUpperCase()}</Text>
                </View>
                <Text style={styles.userName}>{item.nome}</Text>
              </View>
              </TouchableOpacity>
            )}
            horizontal={true} // Torna a lista horizontal
            showsHorizontalScrollIndicator={false} // Esconde a barra de rolagem horizontal
          />
          <View style={styles.datasContainer}>
            <Text style={styles.title}>Data Inicial:</Text>
            <Text style={styles.dataTexto}>{dataInicial}</Text>

            <Text style={styles.title}>Data Final:</Text>
            <Text style={styles.dataTexto}>{dataFinal}</Text> 
         
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <Ionicons name="calendar" size={30} color="black" />
          </TouchableOpacity> 
          </View>

          <Modal visible={showCalendar} transparent animationType="slide" onRequestClose={() => setShowCalendar(false)}>
            <View style={styles.calendarModalContainer}>
              <View style={styles.calendarModalContent}>
                <Calendar
                  onDayPress={onDayPress}
                  markedDates={{
                    [dataInicial]: { selected: true, selectedColor: 'blue' },
                    [dataFinal]: { selected: true, selectedColor: 'green' },
                  }}
                />
                <Button title="Fechar Calendário" onPress={() => setShowCalendar(false)} />
              </View>
            </View>
          </Modal>
          <Text style={styles.title}>Descrição</Text>
        <TextInput
          style={styles.inputDescricao} // Novo estilo para a descrição
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline={true} // Permite múltiplas linhas
        />
          <View style={styles.buttonContainer}>
            
          </View>
          
          
          </ScrollView>
          <Button title="Criar Nota" onPress={handleSubmit} />
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
  container: {
      flex: 1,
      backgroundColor: '#443368',
  },
  modal: {
      backgroundColor: '#FFF', 
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      padding: 16,
      flex: 1,
  },
  HeaderTitle: {
      fontSize: 28,
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
  },
  title: {
      fontSize: 14, 
      fontWeight: 'bold',
      marginBottom: 15,
  },
  input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
  },
  userItem: {
    flexDirection: 'row', // Alinha o ícone e o nome em linha
    alignItems: 'center', // Centraliza verticalmente
    padding: 10,
    margin: 5,
  },
  userInitialContainer: { // Estilos para o container do ícone
    backgroundColor: '#f0f0f0', // Cor de fundo do ícone
    width: 60,
    height: 60,
    borderRadius: 15, // Faz um círculo
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // Espaçamento entre o ícone e o nome
  },
  userInitial: {
    fontSize: 18,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  userName: {
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: '#443368',
    borderColor: '#443368',
    opacity: 1,
  },
  Icon: {
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#443368',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center', // Alinha os elementos ao
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 16,                     // Adiciona padding ao redor do botão
    width: '100%',                  // Garante que o botão ocupe a largura total
  },
  datasContainer: {
    flexDirection: 'row',
    alignItems: 'baseline' ,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  dataTexto: {
    fontSize: 16,
  },
  calendarModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  calendarModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  inputDescricao: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top', // Alinha o texto ao topo
    flex: 1, // Ocupa o espaço restante
  },
});
