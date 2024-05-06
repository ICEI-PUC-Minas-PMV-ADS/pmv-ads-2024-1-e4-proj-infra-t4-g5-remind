import useUser from '../context/UserContextHook';
import Divider from './Divider';

export default function Header({ pageTitle }) {
  const { user } = useUser();

  return (
    <div>
      <div className="flex items-center justify-between p-3 px-4">
        <h1 className="font-semibold text-subtleBlack">{pageTitle}</h1>
        <div className="flex items-center gap-2">
          <p className="flex items-center justify-center text-md font-bold bg-primary rounded-[50%] w-6 h-6 text-white">
            {user.photo || user.nome[0] || '@'}
          </p>
          <h1 className="font-semibold text-subtleBlack">{user.nome}</h1>
        </div>
      </div>
      <Divider />
    </div>
  );
}
