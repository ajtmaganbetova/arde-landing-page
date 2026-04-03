"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Ссфлки - часть ведет на страницы, часть — на якоря
  const navLinks = [
    { name: "О нас", href: "/#about", isScroll: true },
    { name: "Услуги", href: "/services", isScroll: false },
    { name: "Портфолио", href: "/portfolio", isScroll: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Логотип */}
        <Link
          href="/"
          className="relative w-[100px] h-[50px] md:w-[160px] md:h-[80px] hover:opacity-80 transition"
        >
          <Image
            src="/images/logo.png"
            alt="ARDE"
            fill
            style={{ cursor: "pointer" }}
            className="object-contain"
            priority
          />
        </Link>

        {/* Центральная навигация */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-yellow-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Правая часть: Мессенджеры + Кнопка */}
        <div className="hidden md:flex items-center gap-6">
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
          </div>

          <Link
            href="/contact"
            className="border border-white/20 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest transition-all hover:bg-yellow-500 hover:text-black font-bold"
          >
            Обсудить проект
          </Link>
        </div>

        {/* Бургер для мобилки */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 p-2 z-[70]"
        >
          <span
            className={`w-5 h-[0.5px] bg-white transition-all ${open ? "rotate-45 translate-y-1" : ""}`}
          />
          <span
            className={`w-5 h-[0.5px] bg-white transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-[0.5px] bg-white transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`}
          />
        </button>
      </div>

      {/* Мобильное меню (Full Screen) */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 z-[60] flex flex-col ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-32 pb-12 px-10">
          {/* Верхняя часть: Навигация */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-light tracking-wide text-white hover:text-gray-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Нижняя часть: Контакты */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Астана
              </h4>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+77775348877"
                className="text-lg font-medium text-white"
              >
                +7 (777) 534-88-77
              </a>
              <a
                href="mailto:info@arde-studio.kz"
                className="text-sm font-light text-gray-400"
              >
                info@arde.kz
              </a>
            </div>

            {/* Синие кнопки мессенджеров */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://t.me/your_acc"
                className="bg-yellow-500 text-black px-6 py-3 rounded-full text-xs font-medium transition active:scale-95"
              >
                Telegram
              </Link>
              <Link
                href="https://wa.me/77775348877"
                className="bg-yellow-500 text-black px-6 py-3 rounded-full text-xs font-medium transition active:scale-95"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
