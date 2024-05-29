import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useUser } from '../context/UserContext.jsx';
import { getUserNotesAssigned } from '../services/noteServices';
import NoteItem from '../components/NoteItem';
import Loading from '../components/Loading'; // Substitua pelo seu componente de carregamento
import Navbar from '../components/Navbar';
import ModalNote from '../components/ModalNote';


const Home = () => {
  const { user } = useUser();
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = (note) => {
    setSelectedNote(note);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setModalVisible(false);
  };


  useEffect(() => {
    const getNotes = async () => {
      let res = await getUserNotesAssigned();
      res = res.filter(note => note.destinatario === user?._id);
  
      // Separação das notas
      const notasPendentes = res
        .filter(note => note.situacao === "pendente")
        .sort((a, b) => new Date(b.datafinal) - new Date(a.datafinal));
      const notasConcluidas = res
        .filter(note => note.situacao === "concluido")
        .sort((a, b) => new Date(b.datafinal) - new Date(a.datafinal)); // Ordenação decrescente
  
      // Atualização do estado com as duas listas
      // Atualização do estado com as duas listas ordenadas
    setNotes({ pendentes: notasPendentes, concluidas: notasConcluidas });
  };
  
    getNotes();
  }, [user]);
    

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Pendentes</Text>
      <FlatList data={notes.pendentes} // exibir as notas pendentes
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)}>
          <NoteItem
            _id={item._id}
            titulo={item.titulo}
            descricao={item.descricao}
            criador={item.criador}
            datafinal={item.datafinal}
            datainicial={item.datainicial}
            destinatario={item.destinatario}
            situacao={item.situacao}
            userInfo={item.userInfo}
          />
          </TouchableOpacity>
        )}
      />
      <Text style={styles.sectionTitle}>Concluídas</Text>
            <FlatList data={notes.concluidas} // exibir as notas concluídas
              renderItem={({ item }) => (
              <TouchableOpacity onPress={() => openModal(item)}>
            <NoteItem
              _id={item._id}
              titulo={item.titulo}
              descricao={item.descricao}
              criador={item.criador}
              datafinal={item.datafinal}
              datainicial={item.datainicial}
              destinatario={item.destinatario}
              situacao={item.situacao}
              userInfo={item.userInfo}
        /></TouchableOpacity>)} // Add a closing parenthesis here
        keyExtractor={item => item._id}
      />
      <ModalNote open={modalVisible} setOpen={closeModal} note={selectedNote} />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;