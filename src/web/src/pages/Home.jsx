import ListaIcon from '../assets/icons/ListaIcon';
import QuadroIcon from '../assets/icons/QuadroIcon';
import Divider from '../components/Divider';
import Loading from '../components/Loading';
import { SideBar } from '../components/SideBar';
import TopicItem from '../components/SideBar/TopicItem';
import useUser from '../context/UserContextHook';

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col">
        <div>
          <h1 className="p-3 pl-4 font-semibold text-subtleBlack">Tarefas</h1>
          <Divider />
        </div>

        <div className="flex flex-col w-screen">
          <div className="flex gap-6 p-4">
            <TopicItem Icon={ListaIcon} text="Lista" />
            <TopicItem Icon={QuadroIcon} text="Quadro" />
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}
