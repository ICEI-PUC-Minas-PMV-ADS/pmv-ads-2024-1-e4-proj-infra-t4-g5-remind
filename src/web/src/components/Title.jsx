export default function Title(props) {
  return (
    <h1 className={`text-6xl font-semibold ${props.className}`}>
      {props.children}
    </h1>
  );
}
