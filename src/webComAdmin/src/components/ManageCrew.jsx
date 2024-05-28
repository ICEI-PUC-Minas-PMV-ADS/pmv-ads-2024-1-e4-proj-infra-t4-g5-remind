import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageCrew = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admins/admins');
        setAdmins(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter a lista de administradores:', error);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div>
      <h1>Gerenciar Equipe</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {admins.map((admin) => (
            <li key={admin._id}>
              <strong>Nome:</strong> {admin.adminName} | <strong>Email:</strong> {admin.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageCrew;
