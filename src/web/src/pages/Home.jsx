import { useEffect, useState } from 'react';
import ListaIcon from '../assets/icons/ListaIcon';
import QuadroIcon from '../assets/icons/QuadroIcon';
import Divider from '../components/Divider';
import Loading from '../components/Loading';
import { SideBar } from '../components/SideBar';
import TopicItem from '../components/TopicItem';
import useUser from '../context/UserContextHook';
import { getUserNotesAssigned } from '../services/noteServices';
import Header from '../components/Header';
import Card from '../components/Card';
import ModalNote from '../components/ModalNote';
import CreateNote from '../components/CreateNote';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const pathName = useLocation().pathname.slice(1);
  const { user } = useUser();
  const [notes, setNotes] = useState([]);
  const [viewType, setViewType] = useState('card');
  const [modalTaskOpen, setModalTaskOpen] = useState(false);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  // Função para buscar as notas do usuário.
  useEffect(() => {
    const getNotes = async () => {
      let res = await getUserNotesAssigned();

      if (pathName === 'recebidas') {
        res = res.filter((note) => note.destinatario === user?._id);
      } else {
        res = res.filter((note) => note.criador === user?._id);
      }

      setNotes(res);
    };

    getNotes();
  }, [modalCreateOpen, modalTaskOpen, pathName, user?._id]);

  // Se o usuário não estiver carregado, exibe um loading.
  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen">
      <ModalNote
        open={modalTaskOpen}
        setOpen={setModalTaskOpen}
        note={selectedNote}
      />
      <CreateNote open={modalCreateOpen} setOpen={setModalCreateOpen} />

      <SideBar />
      <div className="flex flex-col w-screen">
        <Header pageTitle={`Tarefas ${pathName}`} />

        <div className="flex flex-col">
          <div className="flex gap-6 p-4">
            <TopicItem
              Icon={ListaIcon}
              text="Lista"
              onClick={() => setViewType('lista')}
              active={viewType === 'lista'}
            />
            <TopicItem
              Icon={QuadroIcon}
              text="Quadro"
              onClick={() => setViewType('card')}
              active={viewType === 'card'}
            />
          </div>
          <Divider />
        </div>

        <div className="flex items-center p-4">
          <div className="flex w-full gap-4">
            <p className="p-1 text-sm font-medium border rounded-md border-textSecondary bg-textSecondary bg-opacity-15 text-textSecondary">
              Filtros
            </p>
          </div>
          <div className="flex items-center justify-end w-full gap-6">
            <div>Pesquisar</div>
            {pathName == 'recebidas' ? (
              <button
                className="h-12 font-semibold bg-white border shadow-sm w-36 text-btnBlue border-btnBlue hover:scale-105 hover:rounded-md lg:w-50"
                onClick={() => setModalCreateOpen((prev) => !prev)}
              >
                Criar tarefa
              </button>
            ) : null}
          </div>
        </div>

        <div
          className={`grid grid-flow-row gap-6 p-2 overflow-y-auto sm:p-6 ${viewType == 'card' ? 'sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]' : 'sm:grid-cols-[repeat(auto-fill,1fr)]'}`}
        >
          {notes.map((note) => (
            <Card
              note={note}
              setModalOpen={setModalTaskOpen}
              setSelectedNote={setSelectedNote}
              key={note._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
