import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { SideBar } from '../components/SideBar';
import useUser from '../context/UserContextHook';
import { getUser } from '../services/userServices';
import Divider from '../components/Divider';

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

    fetchUserPermission();
  }, [user]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (userPermission === 1) {
        try {
          const res = await axios.get(
            'https://remind-api.vercel.app/api/users',
          );
          setUsers(Array.isArray(res.data) ? res.data : []);
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
          if (error.code === 'ERR_BAD_RESPONSE') {
            setError(
              'O servidor demorou muito para responder. Por favor, tente novamente mais tarde.',
            );
          } else {
            setError('Erro ao buscar usuários');
          }
          setUsers([]);
        }
      }
    };

    fetchUsers();
  }, [userPermission]);

  const createUser = async () => {
    try {
      const res = await axios.post(
        'https://remind-api.vercel.app/api/users',
        newUser,
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
      setIsModalOpen(false); // Close the modal after creating a user
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError('Erro ao criar usuário');
    }
  };

  const updateUser = async () => {
    try {
      const res = await axios.put(
        `https://remind-api.vercel.app/api/users/${editingUser._id}`,
        editingUser,
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
      await axios.delete(`https://remind-api.vercel.app/api/users/${id}`);
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
      <div className="flex h-screen items-center justify-center">
        <p>{error}</p>
      </div>
    );
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
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between p-3 px-4">
          <h1 className="font-semibold text-subtleBlack">Usuários</h1>
          <h1 className="font-semibold text-subtleBlack">Alvaro S.</h1>
        </div>
        <Divider />
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center p-4">
            <h1 className="font-bold text-2xl">Central de Usuários</h1>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Criar Usuário
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white rounded-lg shadow-lg p-4 w-64"
              >
                <img
                  src="https://i.pinimg.com/736x/ea/33/43/ea334309cf26c5c565a61c94831bcdfc.jpg"
                  alt="Foto de Perfil"
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-2">
                  <h2 className="text-lg font-bold">{user.nome}</h2>
                  <p className="text-sm text-gray-600">{user.cargo}</p>
                  <p className="text-sm text-gray-600">{user.setor}</p>
                </div>
                <div className="flex justify-between">
                  <button
                    className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
                    onClick={() => {
                      setEditingUser(user);
                      updateUser(); // Adicionando a chamada à função updateUser
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                    onClick={() => deleteUser(user._id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl z-50">
                <h2 className="text-xl font-bold mb-4">
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
                    className="mb-2 w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.targety.value })
                    }
                    className="mb-2 w-full p-2 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    value={newUser.senha}
                    onChange={(e) =>
                      setNewUser({ ...newUser, senha: e.target.value })
                    }
                    className="mb-2 w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Cargo"
                    value={newUser.cargo}
                    onChange={(e) =>
                      setNewUser({ ...newUser, cargo: e.target.value })
                    }
                    className="mb-2 w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Setor"
                    value={newUser.setor}
                    onChange={(e) =>
                      setNewUser({ ...newUser, setor: e.target.value })
                    }
                    className="mb-2 w-full p-2 border rounded"
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
                    className="mb-2 w-full p-2 border rounded"
                  />
                  <button
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={createUser}
                  >
                    Criar
                  </button>
                </div>
                <button
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
