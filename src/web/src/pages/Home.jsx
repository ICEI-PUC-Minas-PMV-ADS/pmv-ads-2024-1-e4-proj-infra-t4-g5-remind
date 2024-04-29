import HomeIcon from '../assets/icons/HomeIcon';
import Loading from '../components/Loading';
import { SideBar } from '../components/SideBar';
import useUser from '../context/UserContextHook';

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex">
      <SideBar.Root>
        <SideBar.Item Icon={HomeIcon} text="Home" />
      </SideBar.Root>

      <div>
        <h1 className="font-bold text-primary">{user && user.nome}</h1>
      </div>
    </div>
  );
}
