export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ backgroundColor: "#3d2b20" }}>
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-[0.2em]" style={{ color: "#c4a090" }}>
                  День свадьбы
                </h3>
                <span className="text-sm sm:text-base font-light" style={{ color: "#f0e0d6" }}>
                  6 июня 2026
                </span>
                <span className="text-sm sm:text-base font-light" style={{ color: "#f0e0d6" }}>
                  Сбор в 13:40
                </span>
                <span className="text-sm sm:text-base font-light" style={{ color: "#f0e0d6" }}>
                  ул. Ленина, 94
                </span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-[0.2em]" style={{ color: "#c4a090" }}>
                  Пожелания
                </h3>
                <span className="text-sm sm:text-base font-light" style={{ color: "#f0e0d6" }}>
                  Без «горько»
                </span>
                <span className="text-sm sm:text-base font-light" style={{ color: "#f0e0d6" }}>
                  Пастельные тона
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-light italic"
                style={{ color: "#c4a090", fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                06.06.26
              </h1>
              <p className="text-sm sm:text-base font-light" style={{ color: "#c4a090" }}>
                С любовью, Нина & Дмитрий
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
