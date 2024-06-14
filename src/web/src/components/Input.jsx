export default function Input({
  type = 'text',
  max,
  min,
  required,
  name,
  disabled,
  error,
  ...props
}) {
  return (
    <input
      {...props}
      required={required}
      type={type}
      max={max ?? ''}
      min={min ?? ''}
      name={name ?? ''}
      disabled={disabled}
      className={`${props.className} p-1 border-[1px] border-lightGray border-solid focus:rounded-md lg:h-12 focus-visible:border-primary focus-visible:outline-primary ${error && 'border-red-600 outline-red-600'} disabled:bg-slate-200 disabled:rounded-md `}
    />
  );
}
