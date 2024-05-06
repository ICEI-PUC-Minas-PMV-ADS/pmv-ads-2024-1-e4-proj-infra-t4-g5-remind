import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import UserProvider from './context/UserContext';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}
