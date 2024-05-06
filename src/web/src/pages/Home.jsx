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

export default function Home() {
  const { user } = useUser();
  const [notes, setNotes] = useState([]);

  // Função para buscar as notas do usuário.
  useEffect(() => {
    const getNotes = async () => {
      const res = await getUserNotesAssigned();

      setNotes(res);
    };

    getNotes();
  }, []);

  // Se o usuário não estiver carregado, exibe um loading.
  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-screen">
        <Header />

        <div className="flex flex-col">
          <div className="flex gap-6 p-4">
            <TopicItem Icon={ListaIcon} text="Lista" />
            <TopicItem Icon={QuadroIcon} text="Quadro" />
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
            <div>Pesquisar</div>

            <button
              className="h-12 font-semibold bg-white border shadow-sm w-36 text-btnBlue border-btnBlue hover:scale-105 hover:rounded-md lg:w-50"
              onClick={() => setModalCreateOpen((prev) => !prev)}
            >
              Criar tarefa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
