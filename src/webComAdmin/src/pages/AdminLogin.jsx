import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    //authentication logic
    const isValid = username === 'admin' && password === 'password'; //Example validation

    if (isValid) {
      const token = 'example-token'; // Replace with actual token from your backend
      login(token);
    } else {
      setError('Usuário ou senha inválidos.');
    }
    setLoading(false);
  };

  return (
    <div >
      <div className="relative -mx-4 flex flex-col p-4">
        <div className="pb-6 flex flex-col items-center justify-center">

        
      <h1 className='buynow-card-title'>Admin Login</h1>
      <div className='buynow-input-text'></div>
      <form onSubmit={handleLogin}>
        <div className='buynow-input-text'>
        <input
          className='w-full p-1'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder=" Username"
        />
        </div>
        <div className='buynow-input-text'>
        <input
          className='w-full p-1'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" Password"
        />
        </div>
        <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>{error}</p>}
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default AdminLogin;
