
interface SubtitleProps {
  children: string;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <div className="text-center p-2">
      <h2 className="font-light text-zinc-500 text-xl">{children}</h2>
    </div>
  );
}
