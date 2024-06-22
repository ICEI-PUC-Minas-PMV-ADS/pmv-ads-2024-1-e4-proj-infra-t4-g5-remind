import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { SideBar } from '../components/SideBar';
import useUser from '../context/UserContextHook';
import { getUser } from '../services/userServices';
import Divider from '../components/Divider';
import { getAllUsers } from '../services/userServices';
import Header from '../components/Header';

export default function Usuario() {
  const { user } = useUser();
  const [userPermission, setUserPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    nome: '',
    email: '',
    senha: '',
    cargo: '',
    setor: '',
    permissao: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserPermission = async () => {
      if (user) {
        try {
          const userData = await getUser(user._id);
          setUserPermission(userData.permissao);
        } catch (error) {
          console.error('Erro ao buscar permissão do usuário:', error);
          setError('Erro ao buscar permissão do usuário');
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };
    const fetUsers = async () => {
      const res = await getAllUsers();

      setUsers(res);
    };

    fetUsers();

    fetchUserPermission();
  }, [user]);

  const createUser = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/criar`,
        newUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
          },
        },
      );

      setUsers([...users, res.data]);
      setNewUser({
        nome: '',
        email: '',
        senha: '',
        cargo: '',
        setor: '',
        permissao: 0,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError('Erro ao criar usuário');
    }
  };

  const updateUser = async (userId) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/update/${userId}`,
        editingUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
          },
        },
      );

      setUsers(
        users.map((user) => (user._id === editingUser._id ? res.data : user)),
      );
      setEditingUser(null);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      setError('Erro ao atualizar usuário');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`,
        },
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      setError('Erro ao excluir usuário');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>{error}</p>
      </div>
    );
  }

  if (!userPermission || userPermission !== 1) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Você não tem permissão para acessar esta página.</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-x-hidden">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header pageTitle="Central de Usuários" />
        <Divider />
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-end p-4">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Criar Usuário
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {users.map((user) => (
              <div
                key={user._id}
                className="w-64 p-4 bg-white rounded-lg shadow-lg"
              >
                <img
                  src="https://i.pinimg.com/736x/ea/33/43/ea334309cf26c5c565a61c94831bcdfc.jpg"
                  alt="Foto de Perfil"
                  className="object-cover w-full h-32 rounded-t-lg"
                />
                <div className="p-2">
                  <h2 className="text-lg font-bold">{user.nome}</h2>
                  <p className="text-sm text-gray-600">{user.cargo}</p>
                  <p className="text-sm text-gray-600">{user.setor}</p>
                </div>
                <div className="flex justify-between">
                  <button
                    className="px-2 py-1 mr-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600"
                    onClick={() => {
                      setEditingUser(user);
                      updateUser(); // Adicionando a chamada à função updateUser
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => deleteUser(user._id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="z-50 w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-xl font-bold">
                  Adicionar novo usuário
                </h2>
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    value={newUser.nome}
                    onChange={(e) =>
                      setNewUser({ ...newUser, nome: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    value={newUser.senha}
                    onChange={(e) =>
                      setNewUser({ ...newUser, senha: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Cargo"
                    value={newUser.cargo}
                    onChange={(e) =>
                      setNewUser({ ...newUser, cargo: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Setor"
                    value={newUser.setor}
                    onChange={(e) =>
                      setNewUser({ ...newUser, setor: e.target.value })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="number"
                    placeholder="Permissão"
                    value={newUser.permissao}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        permissao: parseInt(e.target.value),
                      })
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <button
                    className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={createUser}
                  >
                    Criar
                  </button>
                </div>
                <button
                  className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
