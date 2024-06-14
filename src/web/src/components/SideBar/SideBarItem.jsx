import { Link, useLocation } from 'react-router-dom';
import TopicItem from '../TopicItem';

export default function SideBarItem({ Icon, text, open, href, ...rest }) {
  const { pathname } = useLocation();

  return (
    <li {...rest} className={`${rest.className} ${!open && 'md:ml-5'}`}>
      <Link to={href}>
        <TopicItem
          Icon={Icon}
          text={text}
          open={open}
          active={pathname == href}
        />
      </Link>
    </li>
  );
}
