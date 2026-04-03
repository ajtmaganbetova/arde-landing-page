import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Извлекаем имя и телефон из запроса
    const { name, phone } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // 2. Добавляем имя в сообщение для Telegram
    const message = `
🚀 **Новая заявка на сайте ARDE**
— — — — — — — — — — — —
👤 Имя: ${name || "Не указано"}
📞 Телефон: [${phone}](tel:${phone})
📅 Дата: ${new Date().toLocaleString("ru-RU")}
    `.trim();

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) throw new Error("Ошибка при отправке в Telegram");

    // 3. Отправляем данные в Google Sheets (включая имя)
    // Убедитесь, что в Google Таблице есть колонка "Name" в первой строке
    await fetch(`${process.env.GOOGLE_SHEETS_DB}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            Date: new Date().toLocaleString("ru-RU"),
            Name: name,
            Phone: phone,
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
