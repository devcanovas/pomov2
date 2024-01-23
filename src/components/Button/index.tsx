interface ButtonProps {
  color: string;
  children: React.ReactNode;
}

export default function Button({ color, children }: ButtonProps) {
  return (
    <button
      className={`border-[1px] border-[${color}] p-[1rem 1.5rem] text-[12px w-full text-center bg-transparent transition duration-75 hover:bg-[${color}] hover:text-white hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}
