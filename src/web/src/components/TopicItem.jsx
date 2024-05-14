export default function TopicItem({
  Icon,
  text,
  open,
  onClick,
  active,
  ...rest
}) {
  return (
    <button
      className={`flex items-center gap-2 cursor-pointer group relative ${rest.className}`}
      id={`topic-item-${text.toLowerCase()}`}
      onClick={() => onClick && onClick()}
    >
      {active ? (
        <div className="rounded-[50%] bg-primary w-1 h-1 absolute -left-2"></div>
      ) : null}
      {Icon ? <Icon active={active} /> : null}
      <h2
        className={`text-textSecondary group-hover:text-primary group-hover:font-semibold ${open != null && !open && 'hidden'} ${active && '!font-semibold !text-primary'}`}
      >
        {text}
      </h2>
    </button>
  );
}
