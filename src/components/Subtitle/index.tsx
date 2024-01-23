
interface SubtitleProps {
  children: string;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <div className="text-center p-[0.5rem]">
      <h2 className="font-light text-[#6a6a6a]">{children}</h2>
    </div>
  );
}
