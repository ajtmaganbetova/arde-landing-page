export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Мягкое свечение на фоне */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Левая часть: Заголовок */}
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Студия <span className="font-semibold">ARDE</span> — <br />
              <span className="text-gray-500">
                совершенство в <br /> деталях.
              </span>
            </h2>
          </div>

          {/* Правая часть: Текст и Кнопка */}
          <div className="md:col-span-7 space-y-8">
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Мы не просто рисуем картинки. Мы проектируем образ жизни в Астане,
              сочетая современные технологии и вечную классику комфорта.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Сопровождаем проект от первой встречи и планировочного решения до
              финальной расстановки декора. Ваше участие — только в удовольствии
              от процесса выбора.
            </p>

            <div>
              <a
                href="/about"
                className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-bold text-white transition-all"
              >
                Подробнее о студии
                <span className="w-8 h-[1px] bg-yellow-500 group-hover:w-16 transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Статистика (опционально, для усиления доверия) */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/5">
          {[
            { label: "Лет опыта", val: "8+" },
            { label: "Проектов", val: "120+" },
            { label: "Кв. метров", val: "15k" },
            { label: "Наград", val: "4" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-semibold mb-1">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
