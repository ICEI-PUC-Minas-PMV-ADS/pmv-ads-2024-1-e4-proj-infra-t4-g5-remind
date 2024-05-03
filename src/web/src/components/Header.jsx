import useUser from '../context/UserContextHook';
import Divider from './Divider';

export default function Header() {
  const { user } = useUser();

  return (
    <div>
      <div className="flex items-center justify-between p-3 px-4">
        <h1 className="font-semibold text-subtleBlack">Tarefas</h1>
        <h1 className="font-semibold text-subtleBlack">{user.nome}</h1>
      </div>
      <Divider />
    </div>
  );
}
