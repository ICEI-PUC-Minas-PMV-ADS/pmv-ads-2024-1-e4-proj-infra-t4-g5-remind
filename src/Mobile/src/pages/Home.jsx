import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, ScrollView,  TextInput } from 'react-native';
import { Button, Avatar } from 'react-native-paper';

import { useUser } from '../context/UserContext.jsx';
import { getUserNotesAssigned, getUserNotesCreated } from '../services/noteServices';
import NoteItem from '../components/NoteItem';
import Loading from '../components/Loading'; // Substitua pelo seu componente de carregamento
import Navbar from '../components/Navbar';
import ModalNote from '../components/ModalNote';
import { dateDiffInMinutes } from '../utils/index.js';

const data = [
    { id: 1, name: "Vitor", avatar: "R" },
    { id: 2, name: "Julio", avatar: "R" },
    { id: 3, name: "Celso", avatar: "R" },
    { id: 4, name: "Marcos", avatar: "R" },
    { id: 5, name: "Jesus", avatar: "R" },
    { id: 6, name: "Maria", avatar: "R" },
    { id: 7, name: "Luana", avatar: "R" },
    { id: 8, name: "Yasmin", avatar: "R" },
]

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

    const [height, setHeight] = useState(40);

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
                        <Text style={styles.sectionTitle}>Bem-vindo, {user?.nome}!</Text>
                        {notes.atrasadas.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Notas Atrasadas</Text>
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    notes.atrasadas.map(item => (
                                        <TouchableOpacity key={item._id} onPress={() => openModal(item)}>
                                            <NoteItem {...item} />
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
                                            <NoteItem {...item} />
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
                {
                    selectedIcon === 'CreateButton' && (
                        <>
                            <View style={styles.roundedContainer}>

                                <Text>Nome da Tarefa</Text>
                                <TextInput style={styles.inputTitle} placeholder="Escreva um Título..."></TextInput>
                                <Text>Membros de Equipe</Text>
                                <View>
                                    <FlatList
                                        horizontal
                                        data={data}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity>
                                                <Avatar.Text size={60} label={item.name[0]} />
                                            </TouchableOpacity>
                                        )}
                                        keyExtractor={item => item.id}
                                        contentContainerStyle={styles.listStyle}
                                        initialNumToRender={6}
                                    />
                                </View>
                                <Text>Data Final</Text>
                                <View style={styles.dateView}>
                                    <Text>12, April, 2022, 12:30</Text>
                                    <Button>Data</Button>
                                </View>
                                <Text>Descrição</Text>
                                <TextInput
                                    style={[styles.input, { height }]}
                                    multiline={true}
                                    onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)}
                                    placeholder="Escreva algo..."
                                />
                                <TouchableOpacity style={{ marginTop: "auto" }}>
                                    <Button mode="contained" style={{ backgroundColor: "#443368", marginTop: "auto", paddingVertical: 3 }}>
                                        CONFIRMAR
                                    </Button>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
                <ModalNote open={modalVisible} setOpen={closeModal} note={selectedNote} />
            </ScrollView>
            <Navbar onIconSelect={handleIconSelect} />
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
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    createContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#443368",
    },
    roundedContainer: {
        flex: 1,
        gap: 13,
        width: "100%",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    inputTitle: {
        borderBottomWidth: 2,
        borderBottomColor: "#F2F2F2"
    },
    card: {
        textAlign: "start",
        alignItems: "center",
        gap: 5
    },
    listStyle: {
        paddingVertical: 10,
        gap: 10
    },
    dateView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: "#F2F2F2",
        paddingVertical: 10,
        textAlignVertical: 'top',
    },
});

export default Home;