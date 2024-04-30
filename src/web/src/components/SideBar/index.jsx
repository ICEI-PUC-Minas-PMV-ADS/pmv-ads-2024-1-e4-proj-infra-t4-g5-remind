import HomeIcon from '../../assets/icons/HomeIcon';
import { SideBarModel } from './SideBarModel';

export function SideBar() {
  return (
    <div className="flex">
      <SideBarModel.Root>
        <SideBarModel.Item Icon={HomeIcon} text="Home" href="/" />
      </SideBarModel.Root>
    </div>
  );
}
