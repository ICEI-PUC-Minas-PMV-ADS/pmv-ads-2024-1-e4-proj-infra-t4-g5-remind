import { useState } from 'react';
import axios from 'axios';

const AdminRegister = () => {
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Submitting registration data:', { adminName, email, password });

    try {
      const response = await axios.post('/api/admins/register', { adminName, email, password, role: 'admin' });
      console.log('Registration response:', response.data);
      alert('Novo administrador registrado com sucesso!');
      // Limpar campos após o registro bem-sucedido
      setAdminName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error registering admin:', err);
      setError('Erro ao registrar administrador.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Register Admin</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            placeholder="AdminName"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
