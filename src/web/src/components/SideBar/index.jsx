import HomeIcon from '../../assets/icons/HomeIcon';
import { SideBarModel } from './SideBarModel';
import Logo from '../../assets/images/logo.png';
import PartialLogo from '../../assets/images/partialLogo.png';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import useUser from '../../context/UserContextHook';
import toast from 'react-hot-toast';
import ReceivedIcon from '../../assets/icons/Receivedicon';
import SentIcon from '../../assets/icons/SentIcon';
import { useCallback, useState } from 'react';

export function SideBar() {
  const storagedOpen = JSON.parse(localStorage.getItem('sideBarOpen')) || false;
  const [open, setOpen] = useState(storagedOpen);

  const { logout, user } = useUser();

  function handleLogout() {
    logout();
    toast.success('Conta desconectada!');
  }

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
    localStorage.setItem('sideBarOpen', Boolean(!open));
  }, [open]);

  return (
    <aside
      className={`relative w-[40vw] h-[100dvh] bg-[#F9F8FE] p-4 pt-2 md:w-[20vw] lg:w-[12vw] ${!open && '!w-[12vw] md:!w-[5vw] lg:!w-[4vw] !p-[4px] flex flex-col items-center'}`}
    >
      <img
        src={open ? Logo : PartialLogo}
        className={`mb-4 ${open && 'object-contain md:w-[125px]'}`}
        alt=""
      />

      <button
        className="absolute w-[4px] h-[20px] bg-subtleBlack right-3 top-1/2 rounded-xl hover:scale-125 md:w-[6px] md:h-[24px]"
        onClick={() => handleOpen()}
      />

      <nav
        className={`flex flex-col items-center sm:items-baseline justify-between h-[92%] ${open && 'pl-2'}`}
      >
        <div
          className={`flex flex-col ${!open && 'w-[22px]'} gap-6 sm:w-fit md:gap-4`}
        >
          <SideBarModel.Item
            Icon={ReceivedIcon}
            text="Recebidas"
            href="/recebidas"
            open={open}
          />
          <SideBarModel.Item
            Icon={SentIcon}
            text="Enviadas"
            href="/enviadas"
            open={open}
          />
          {user.permissao == 1 ? (
            <SideBarModel.Item
              Icon={HomeIcon}
              text="Usuários"
              href="/u"
              open={open}
            />
          ) : null}
        </div>

        <button
          className={`w-fit gap-2 flex items-center justify-center flex-wrap text-[#E61010] ${!open && 'ml-1 xl:ml-0'} hover:font-medium hover:scale-110`}
          onClick={() => handleLogout()}
        >
          <LogoutIcon /> Sair
        </button>
      </nav>
    </aside>
  );
}
