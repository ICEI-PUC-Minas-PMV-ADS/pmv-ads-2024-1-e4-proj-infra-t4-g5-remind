import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import UserProvider from './context/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}
