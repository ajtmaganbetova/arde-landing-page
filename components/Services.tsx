import React from "react";
import { Check } from "lucide-react"; // Используем иконки для галочек

const services = [
  {
    title: "Дизайн проект",
    price: "14 000 ₸",
    unit: "/ кв.м",
    desc: "Идеально для детальной проработки интерьера с чертежами и 3D.",
    features: [
      "Планировочное решение (7 000 ₸ / кв.м)",
      "3D визуализация всех комнат",
      "Полный пакет рабочих чертежей",
      "Подбор материалов и мебели",
      "Ведомость чистовых материалов",
    ],
    buttonText: "Заказать проект",
    popular: false,
  },
  {
    title: "Ремонт под ключ",
    price: "120 000 ₸",
    unit: "/ кв.м",
    desc: "Полная реализация проекта без забот о поиске мастеров.",
    features: [
      "Строительно-монтажные работы",
      "Черновые материалы",
      "Инженерные коммуникации",
      "Контроль качества на всех этапах",
      "Гарантия на работы 2 года",
    ],
    buttonText: "Начать ремонт",
    popular: true, // Метка "Популярный выбор"
  },
  {
    title: "Авторский надзор",
    price: "Индивидуально",
    unit: "",
    desc: "Контроль реализации проекта для точного соответствия дизайну.",
    features: [
      "Выезд дизайнера на объект",
      "Консультации строителей",
      "Внесение правок в чертежи",
      "Помощь в закупках",
      "Приемка декоративных элементов",
    ],
    buttonText: "Узнать стоимость",
    popular: false,
  },
];

export default function ServicesModern() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden text-white">
      {/* Фоновое свечение */}
      <div className="absolute top-[20%] -left-20 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-left max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">
            Гибкие планы.{" "}
            <span className="text-gray-400 font-light">
              Результат навсегда.
            </span>
          </h2>
          <p className="text-xl text-gray-500">
            Мы создаем интерьеры, в которых хочется жить.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative flex flex-col bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              {s.popular && (
                <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                  Popular Choice
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg text-gray-400 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {s.price}
                  </span>
                  <span className="text-gray-500">{s.unit}</span>
                </div>
              </div>

              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6 py-2 px-4 bg-white/5 rounded-lg w-fit">
                Что включено
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {s.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 px-6 rounded-full border border-yellow-500/50 text-white font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300">
                {s.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
