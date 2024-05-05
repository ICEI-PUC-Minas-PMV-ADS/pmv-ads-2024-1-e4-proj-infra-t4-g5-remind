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
import { getUser } from '../services/userServices';

/**
 * Componente de página para exibir informações do usuário.
 *
 * @returns {JSX.Element} O componente de página do usuário.
 */
export default function Usuario() {
  const { user } = useUser();
  const [userPermission, setUserPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  // Função para buscar a permissão do usuário.
  useEffect(() => {
    const fetchUserPermission = async () => {
      if (user) {
        try {
          const userData = await getUser(user._id);
          setUserPermission(userData.permissao);
        } catch (error) {
          console.error('Erro ao buscar permissão do usuário:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserPermission();
  }, [user]);

  // Função para buscar as notas do usuário.
  useEffect(() => {
    const getNotes = async () => {
      if (userPermission === 1) {
        const res = await getUserNotesAssigned();
        setNotes(res);
      }
    };
    getNotes();
  }, [userPermission]);

  // Se o usuário não tiver permissão, exibe uma mensagem.
  if (isLoading) {
    return <Loading />;
  }

  if (!userPermission || userPermission !== 1) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Você não tem permissão para acessar esta página.</p>
      </div>
    );
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
        <div className="flex flex-wrap h-screen p-6 overflow-y-auto">
          <div className="h-96">
            <h1>bom dia</h1>
            {notes.map((note) => (
              <div key={note.id} className="p-4 bg-white rounded-lg w-96">
                <h1 className="font-semibold text-subtleBlack">
                  {note.titulo}
                </h1>
                <p className="text-sm text-subtleBlack">{note.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
