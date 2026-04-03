import Image from "next/image";



export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Фоновое изображение с легким зумом для эффекта глубины */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/images/hero.jpg"
          alt="Премиальный интерьер"
          fill
          priority
          className="object-cover opacity-60 scale-105" // Немного увеличиваем масштаб
        />
        {/* Сложный градиент для премиального вида */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
        <div className="space-y-2 mb-6">
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-[10px] font-bold bg-white/5 py-1 px-3 rounded-full border border-white/10">
            Astana • Premium Design
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] max-w-3xl tracking-tight">
          Дизайн интерьера <br />
          <span className="font-semibold italic text-yellow-500/90">
            премиум-класса
          </span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-lg text-lg leading-relaxed font-light">
          Создаем исключительные пространства, где каждая деталь подчеркивает
          ваш статус и эстетику жизни.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="bg-white text-black px-10 py-4 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Оставить заявку
          </a>
          <a
            href="#projects"
            className="border border-white/20 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-all"
          >
            Смотреть проекты
          </a>
        </div>
      </div>

      {/* Декоративный элемент — номер телефона или скролл вниз */}
      <div className="absolute bottom-10 left-6 z-10 hidden md:block">
        <div className="flex items-center gap-4 text-white/30 text-xs tracking-widest uppercase">
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
