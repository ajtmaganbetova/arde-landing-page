"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "О нас", href: "/#about", isScroll: true },
    { name: "Услуги", href: "/services", isScroll: false },
    { name: "Портфолио", href: "/portfolio", isScroll: false },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12">
        {/* Сетка: на мобилках 2 колонки (grid-cols-2), на десктопе 4 (md:grid-cols-4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-16 mb-16 md:mb-20">
          {/* Логотип - на мобилке занимает 1 колонку, как и остальные */}
          <div className="col-span-1">
            <div className="relative w-full h-24 md:w-64 md:h-40 mb-4 md:mb-6">
              <Image
                src="/images/logo.png"
                alt="ARDE"
                fill
                className="object-contain opacity-80 object-left"
              />
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-bold mb-6 md:mb-8">
              Навигация
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-gray-400 hover:text-white transition font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-bold mb-6 md:mb-8">
              Контакты
            </h4>
            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400 font-light">
              <p className="text-base md:text-lg text-white font-medium">
                +7 (777) 534-88-77
              </p>
              {/* <p className="cursor-pointer leading-relaxed">
                г. Астана <br className="md:hidden" />
              </p> */}

              <div className="flex gap-4 border-r border-white/10 pr-6 text-white/50">
                <a
                  href="https://t.me/arde_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <Send size={18} />
                </a>
                <a
                  href="https://wa.me/77010708837"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="mailto:info@arde-studio.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-all duration-300"
                  title="Отправить письмо"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-bold mb-6 md:mb-8">
              Соцсети
            </h4>
            <div className="flex gap-6">
              <Link
                href="https://www.instagram.com/arde.desstudio/"
                className="text-gray-500 hover:text-white transition uppercase text-[10px] md:text-[11px] tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold text-center md:text-left">
          <p>
            © {new Date().getFullYear()} СТУДИЯ ДИЗАЙНА ARDE.{" "}
            <br className="md:hidden" /> ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <p className="hover:text-gray-400 cursor-pointer">
            Политика Конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
}
