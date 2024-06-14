import CalendarIcon from '../../assets/icons/CalendarIcon';

export default function CardTag({ text }) {
  return (
    <div className="flex items-center gap-1 p-1 text-sm font-medium border rounded-xl border-primary bg-bgPrimary text-primary">
      <CalendarIcon />
      <p className="text-sm font-medium ">{text}</p>
    </div>
  );
}
