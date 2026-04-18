export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: "#fdf8f4" }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/9374824a-72f1-4f23-9fa1-62bd7f0f2bae/bucket/1f7a26ea-54a8-4c79-98be-5642cc6c4342.jpg"
          alt="Дмитрий в детстве"
          className="w-full h-full object-cover object-top"
          style={{ filter: "saturate(0.75) brightness(1.05)" }}
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1 gap-8">
        <p className="uppercase text-xs tracking-[0.3em]" style={{ color: "#b89a8a" }}>
          Детали торжества
        </p>
        <h2
          className="text-3xl lg:text-5xl font-light leading-tight"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: "#4a3728", fontStyle: "italic" }}
        >
          Мы будем бесконечно счастливы видеть вас среди наших гостей
        </h2>
        <div className="flex flex-col gap-5" style={{ color: "#6b5244" }}>
          <div className="flex items-start gap-4">
            <span className="text-xs uppercase tracking-widest mt-1 opacity-60 min-w-[80px]">Дата</span>
            <span className="text-base font-light">6 июня 2026 года</span>
          </div>
          <div className="w-full h-px" style={{ backgroundColor: "#e8d5c8" }} />
          <div className="flex items-start gap-4">
            <span className="text-xs uppercase tracking-widest mt-1 opacity-60 min-w-[80px]">Сбор</span>
            <span className="text-base font-light">13:40</span>
          </div>
          <div className="w-full h-px" style={{ backgroundColor: "#e8d5c8" }} />
          <div className="flex items-start gap-4">
            <span className="text-xs uppercase tracking-widest mt-1 opacity-60 min-w-[80px]">Место</span>
            <span className="text-base font-light">ул. Ленина, 94</span>
          </div>
        </div>
      </div>
    </div>
  );
}