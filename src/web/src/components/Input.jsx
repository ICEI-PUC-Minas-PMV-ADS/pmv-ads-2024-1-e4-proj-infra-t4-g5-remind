export default function Input({
  type = 'string',
  width = '52',
  max,
  min,
  required,
  name,
  error,
  ...props
}) {
  return (
    <input
      // onInput={(e) => setState(e.target.value)}
      {...props}
      required={required}
      type={type}
      max={max ?? ''}
      min={min ?? ''}
      name={name ?? ''}
      className={`${props.className} p-1 border-[1px] border-gray-600 outline-gray-600 border-solid focus:rounded-md w-${width} lg:w-72 lg:h-12 ${error && 'border-red-600 outline-red-600'} `}
    />
  );
}
