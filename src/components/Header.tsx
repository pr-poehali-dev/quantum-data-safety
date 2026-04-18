interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-center items-center">
        <div className="text-white text-sm uppercase tracking-[0.3em] font-light opacity-90">
          Нина & Дмитрий
        </div>
      </div>
    </header>
  );
}
