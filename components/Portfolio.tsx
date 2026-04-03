import Image from "next/image";
import Link from "next/link";

const works = [
  {
    src: "/images/1.png",
    title: "Highvill Ishim",
    category: "Жилой комплекс",
    area: "145 м²",
    span: "md:col-span-2 md:row-span-2", // Большая карточка
  },
  {
    src: "/images/2.png",
    title: "Baitas Residence",
    category: "Апартаменты",
    area: "92 м²",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/3.png",
    title: "Minimalist Office",
    category: "Коммерция",
    area: "210 м²",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/7.png",
    title: "Green Quarter",
    category: "Пентхаус",
    area: "180 м²",
    span: "md:col-span-2 md:row-span-1", // Широкая карточка
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок в стиле студии */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Галерея работ
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-none">
              Проекты, которыми <br />
              <span className="font-semibold italic">мы гордимся</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-all"
          >
            Смотреть все
            <span className="w-12 h-[1px] bg-gray-700 group-hover:w-20 group-hover:bg-yellow-500 transition-all duration-500" />
          </Link>
        </div>

        {/* Сетка Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
          {works.map((project, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[2rem] bg-zinc-900 ${project.span}`}
            >
              {/* Изображение с эффектом при наведении */}
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              {/* Градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Информация о проекте */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">
                    0{i + 1}
                  </span>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.area}
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-yellow-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-light tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Ссылка-заплатка на всю карточку */}
              <Link
                href={`/portfolio/${i}`}
                className="absolute inset-0 z-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
