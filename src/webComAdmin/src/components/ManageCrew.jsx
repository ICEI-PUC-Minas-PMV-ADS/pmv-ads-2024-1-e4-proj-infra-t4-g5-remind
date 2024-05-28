import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageCrew = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admins/admins');
        const sortedAdmins = response.data.sort((a, b) => a.adminName.localeCompare(b.adminName));
        setAdmins(sortedAdmins);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter a lista de administradores:', error);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  // Separar admins por role
  const adminList = admins.filter(admin => admin.role === 'admin');
  const masterList = admins.filter(admin => admin.role === 'master');

  return (
    <div>
      <h1 className='font-thin mb-6 p-6'>Gerenciador de Equipe</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="flex border-t-2">
          <div className="w-1/2 m-6">
            <h1 className='font-thin mb-6 p-6'>Administradores</h1>
            <table className="w-full bg-gray-200 text-center">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-2 py-2 text-center whitespace-nowrap">Nome</th>
                  <th className="px-2 py-2 text-center whitespace-nowrap">Email</th>
                </tr>
              </thead>
              <tbody>
                {adminList.map((admin) => (
                  <tr key={admin._id} className="bg-black text-white">
                    <td className="px-2 py-2 font-light text-center whitespace-nowrap">{admin.adminName}</td>
                    <td className="px-2 py-2 font-light text-center whitespace-nowrap">{admin.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-1/2 m-6">
            <h1 className='font-thin mb-6 p-6'>Masters</h1>
            <table className="w-full bg-black text-center">
              <thead >
                <tr className="bg-black text-white">
                  <th className="px-2 py-2 text-center whitespace-nowrap" >Nome</th>
                  <th className="px-2 py-2 text-center whitespace-nowrap">Email</th>
                </tr>
              </thead>
              <tbody>
                {masterList.map((admin) => (
                  <tr key={admin._id} className="bg-black text-white">
                    <td className="px-2 py-2 font-light text-center whitespace-nowrap">{admin.adminName}</td>
                    <td className="px-2 py-2 font-light text-center whitespace-nowrap">{admin.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCrew;
