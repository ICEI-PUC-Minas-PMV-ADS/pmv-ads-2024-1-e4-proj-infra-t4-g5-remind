export default function HomeIcon({ active }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svgPrimaryGroupHover"
    >
      <path
        d="M17 9.65293V10.7938C17 13.7194 17 15.1822 16.1213 16.0911C15.2427 17 13.8284 17 11 17H8C5.17157 17 3.75736 17 2.87868 16.0911C2 15.1822 2 13.7194 2 10.7938V9.65293C2 7.93662 2 7.07846 2.3894 6.36705C2.7788 5.65566 3.49021 5.21413 4.91302 4.3311L6.41302 3.40015C7.91704 2.46672 8.66907 2 9.5 2C10.3309 2 11.0829 2.46672 12.587 3.40015L14.087 4.33109C15.5098 5.21413 16.2212 5.65566 16.6106 6.36705"
        stroke={active ? '#4b0195' : '#656F7D'}
        strokeLinecap="round"
      />
      <path
        d="M11.75 14H7.25"
        stroke={active ? '#4b0195' : '#656F7D'}
        strokeLinecap="round"
      />
    </svg>
  );
}
