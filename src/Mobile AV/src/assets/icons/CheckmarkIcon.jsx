export default function CheckmarkIcon({ active }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.42859 5.99999L5.14287 7.71428L8.57145 4.28571"
        stroke={active ? '#4b0195' : '#656F7D'}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM1.2 6C1.2 8.65097 3.34903 10.8 6 10.8C8.65097 10.8 10.8 8.65097 10.8 6C10.8 3.34903 8.65097 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6Z"
        fill={active ? '#4b0195' : '#656F7D'}
      />
    </svg>
  );
}
