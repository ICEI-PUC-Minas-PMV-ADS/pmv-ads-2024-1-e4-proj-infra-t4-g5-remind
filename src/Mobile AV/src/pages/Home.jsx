import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useUser } from '../context/UserContext.jsx';
import { getUserNotesAssigned, getUserNotesCreated } from '../services/noteServices';
import NoteItem from '../components/NoteItem';
import Loading from '../components/Loading'; // Substitua pelo seu componente de carregamento
import Navbar from '../components/Navbar';
import ModalNote from '../components/ModalNote';
import ModalNoteForm from '../components/ModalNoteForm';
import { dateDiffInMinutes } from '../utils/index.js';




const Home = () => {
  const { user } = useUser();
  const [notes, setNotes] = useState({
    atrasadas: [],
    pendentes: [],
    concluidas: [],
    enviadas: {},
  });
  const [selectedNote, setSelectedNote] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedIcon, setSelectedIcon] = useState('HomeIcon'); // Estado para o ícone selecionado

  const [showModalForm, setShowModalForm] = useState(false); // Estado para o ModalNoteForm


  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

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
      try {
        let res = await getUserNotesAssigned();
        res = res.filter(note => note.destinatario === user?._id);

        const notasConcluidas = res
          .filter(note => note.situacao === "concluido")
          .sort((a, b) => new Date(b.datafinal) - new Date(a.datafinal));

        const notasAtrasadas = res
          .filter(note => note.situacao === "pendente" && dateDiffInMinutes(new Date(), new Date(note.datafinal)) < 0)
          .sort((a, b) => new Date(a.datafinal) - new Date(b.datafinal));

        const notasPendentes = res
          .filter(note => note.situacao === "pendente" && dateDiffInMinutes(new Date(), new Date(note.datafinal)) >= 0)
          .sort((a, b) => new Date(b.datafinal) - new Date(a.datafinal));

          let resEnviadas = await getUserNotesCreated(); 
          // Agrupar notas enviadas por destinatário
          const notasEnviadas = {};
          resEnviadas.forEach(note => {
            const destinatarioId = note.destinatario;
            if (!notasEnviadas[destinatarioId]) {
              notasEnviadas[destinatarioId] = [];
        }
        notasEnviadas[destinatarioId].push(note);
      });
          

        setNotes({ pendentes: notasPendentes, concluidas: notasConcluidas, atrasadas: notasAtrasadas, enviadas: notasEnviadas });
      } catch (error) {
        console.error("Erro ao obter notas:", error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento, independentemente de sucesso ou erro
      }
    };

    getNotes();
  }, [user]);
    

  return (
    <View style={styles.container}>
      <ScrollView>
        
        {selectedIcon === 'HomeIcon' && (
        <>
        {notes.atrasadas.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Notas Atrasadas</Text>
            {isLoading ? (
              <Loading />
            ) : (
              notes.atrasadas.map(item => (
                <TouchableOpacity key={item._id} onPress={() => openModal(item)}>
                  <NoteItem {...item} situacao={item.situacao} datafinal={item.datafinal} />
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
        {notes.pendentes.length > 0 && (
          <View style={styles.cards}>
            <Text style={styles.sectionTitle}>Notas Pendentes</Text>
            {isLoading ? (
              <Loading />
            ) : (
              notes.pendentes.map(item => (
                <TouchableOpacity key={item._id} onPress={() => openModal(item)}>
                  <NoteItem {...item} />
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
        {notes.concluidas.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Notas Concluídas</Text>
            {isLoading ? (
              <Loading />
            ) : (
              notes.concluidas.map(item => (
                <TouchableOpacity key={item._id} onPress={() => openModal(item)}>
                  <NoteItem {...item} situacao={item.situacao} />
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
        </>
        )}
        {selectedIcon === 'SeadersIcon' && (
          <View>
          <Text style={styles.sectionTitle}>Notas Enviadas</Text>
          {isLoading ? (
            <Loading />
          ) : (
            Object.entries(notes.enviadas).map(([destinatarioId, notas]) => (
              <View key={destinatarioId}>
                <Text style={styles.destinatarioTitle}>Para: {destinatarioId}</Text>
                {notas.map(item => (
                  <TouchableOpacity key={item._id} onPress={() => openModal(item)}>
                    <NoteItem {...item} />
                  </TouchableOpacity>
                ))}
              </View>
              ))
            )}
          </View>
        )}
      </ScrollView>
      <Navbar 
        onIconSelect={handleIconSelect} 
        selectedIcon={selectedIcon} 
        showModalForm={showModalForm} // Passa o estado para a Navbar
        setShowModalForm={setShowModalForm} // Passa a função para atualizar o estado
      />
      <ModalNote open={modalVisible} setOpen={closeModal} note={selectedNote} /> 
      <ModalNoteForm open={showModalForm} setOpen={setShowModalForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start'
  },
  cards: {
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default Home;