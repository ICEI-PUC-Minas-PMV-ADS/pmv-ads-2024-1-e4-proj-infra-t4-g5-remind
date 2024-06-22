import { useEffect, useState } from 'react';
import ListaIcon from '../assets/icons/ListaIcon';
import QuadroIcon from '../assets/icons/QuadroIcon';
import Divider from '../components/Divider';
import Loading from '../components/Loading';
import { SideBar } from '../components/SideBar';
import TopicItem from '../components/TopicItem';
import useUser from '../context/UserContextHook';
import {
  getUserNotesAssigned,
  getUserNotesCreator,
} from '../services/noteServices';
import Header from '../components/Header';
import Card from '../components/Card';
import ModalNote from '../components/ModalNote';
import CreateNote from '../components/CreateNote';
import { useLocation } from 'react-router-dom';
import Input from '../components/Input';
import Fuse from 'fuse.js';

export default function Home() {
  const pathName = useLocation().pathname.slice(1);
  const { user } = useUser();
  const [unfilteredNotes, setUnfilteredNotes] = useState([]);
  const [notes, setNotes] = useState([]);
  const [viewType, setViewType] = useState('card');
  const [modalTaskOpen, setModalTaskOpen] = useState(false);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  // Função para buscar as notas do usuário.
  useEffect(() => {
    const getNotes = async () => {
      let res = null;

      if (pathName === 'recebidas') {
        res = await getUserNotesAssigned();
      } else {
        res = await getUserNotesCreator();
      }

      console.log(res)

      // order notes by datafinal
      res = res.sort((a, b) => new Date(a.datafinal) - new Date(b.datafinal));

      // order notes by dataconclusao placing concluded notes at the end
      res = res.sort((note) => (note.dataconclusao ? 1 : -1));

      setNotes(res);
      setUnfilteredNotes(res);
    };

    getNotes();
  }, [modalCreateOpen, modalTaskOpen, pathName, user?._id]);

  // Se o usuário não estiver carregado, exibe um loading.
  if (!user) {
    return <Loading />;
  }

  function search(searchPattern) {
    const fuseOptions = {
      keys: ['titulo', 'descricao'],
    };

    if (searchPattern === '') return setNotes(unfilteredNotes);

    const fuse = new Fuse(notes, fuseOptions);

    setNotes(
      Object.values(fuse.search(searchPattern)).map((note) => note.item),
    );
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

        <div className="flex-col hidden sm:flex">
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

        <div className="flex items-center px-6 pt-4">
          {/* //!TODO: Implementar filtros */}
          {/* <div className="flex w-full gap-4">
            <p className="p-1 text-sm font-medium border rounded-md border-textSecondary bg-textSecondary bg-opacity-15 text-textSecondary">
            Filtros
            </p>
          </div> */}
          <div className="flex items-center justify-end w-full gap-6">
            <Input
              placeholder="Pesquisar..."
              required
              className="border-0 valid:!border-[1px] w-full sm:w-24 sm:valid:w-56"
              onKeyUp={search}
            />

            <button
              id="home-criar-tarefa"
              className="h-12 font-semibold bg-white border shadow-sm w-36 text-btnBlue border-btnBlue hover:scale-105 hover:rounded-md lg:w-50"
              onClick={() => setModalCreateOpen((prev) => !prev)}
            >
              Criar tarefa
            </button>
          </div>
        </div>

        <div
          className={`grid grid-flow-row gap-6 p-2 overflow-y-auto sm:p-6 ${viewType == 'card' ? 'sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]' : 'sm:grid-cols-[repeat(auto-fill,1fr)]'}`}
        >
          {notes.length === 0 && (
            <p className="text-center text-textSecondary">
              Nenhuma tarefa encontrada
            </p>
          )}
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
