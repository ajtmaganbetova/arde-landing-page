"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="py-32 text-center text-yellow-500 text-lg">
        Спасибо, {name}! Мы свяжемся с вами в ближайшее время.
      </div>
    );
  }

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
          Консультация
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
          Начните путь к{" "}
          <span className="font-semibold italic">идеальному</span> дому
        </h2>

        <div className="bg-white/5 border border-white/10 p-2 md:p-3 rounded-[2.5rem] md:rounded-full backdrop-blur-sm shadow-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-2"
          >
            {/* Поле Имя */}
            <div className="w-full md:w-1/4">
              <input
                type="text"
                required
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 bg-transparent border-none text-white text-lg px-8 focus:outline-none placeholder:text-gray-600"
              />
            </div>

            {/* Разделитель (только на десктопе) */}
            <div className="hidden md:block w-[1px] h-8 bg-white/10" />

            {/* Поле Телефон */}
            <div className="flex-grow w-full md:w-auto">
              <PhoneInput
                country={"kz"}
                value={phone}
                onChange={setPhone}
                containerClass="!bg-transparent"
                inputClass="!w-full !h-14 !bg-transparent !border-none !text-white !text-lg !pl-16 focus:ring-0"
                buttonClass="!bg-transparent !border-none !hover:bg-transparent !pl-6"
                dropdownClass="!bg-zinc-900 !text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !agree}
              className="w-full md:w-auto whitespace-nowrap bg-white text-black hover:bg-yellow-500 px-10 h-14 rounded-full md:rounded-full font-bold transition-all duration-300 disabled:opacity-20"
            >
              {loading ? "..." : "Записаться"}
            </button>
          </form>
        </div>

        <label className="mt-6 flex items-center justify-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-yellow-500 transition-all appearance-none border"
          />
          <span className="text-[11px] text-gray-500 group-hover:text-gray-300 transition uppercase tracking-wider">
            Я согласен(-на) на обработку персональных данных
          </span>
        </label>
      </div>
    </section>
  );
}
