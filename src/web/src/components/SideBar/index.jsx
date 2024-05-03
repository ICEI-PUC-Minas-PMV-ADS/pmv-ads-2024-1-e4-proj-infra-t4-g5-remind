import HomeIcon from '../../assets/icons/HomeIcon';
import { SideBarModel } from './SideBarModel';

export function SideBar() {
  return (
    <SideBarModel.Root>
      <SideBarModel.Item Icon={HomeIcon} text="Recebidas" href="/" />
      <SideBarModel.Item Icon={HomeIcon} text="Enviadas" href="/e" />
    </SideBarModel.Root>
  );
}
