export default function SideBarItem({ Icon, text, open, ...rest }) {
  return (
    <li
      {...rest}
      className={`flex items-center gap-2 cursor-pointer group ${open && 'hover:ml-1'}`}
    >
      <Icon />
      <a
        href=""
        className={`font-medium text-textSecondary group-hover:!text-primary ${!open && 'hidden'}`}
      >
        {text}
      </a>
    </li>
  );
}
