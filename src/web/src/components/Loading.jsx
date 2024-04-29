export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen gap-1">
      <h1 className="text-2xl font-bold rounded-[50%] h-3 w-3 bg-primary animate-jump"></h1>
      <h1 className="text-2xl font-bold rounded-[50%] h-3 w-3 bg-primary animate-jump animation-delay-[100ms]"></h1>
      <h1 className="text-2xl font-bold rounded-[50%] h-3 w-3 bg-primary animate-jump animation-delay-[200ms]"></h1>
    </div>
  );
}
