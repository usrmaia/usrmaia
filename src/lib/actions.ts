"use server";

import { redirect } from "next/navigation";

export async function sendWhatsAppMessage(formData: FormData) {
  const message = formData.get("message") as string;
  const phoneNumber = "5588992465315";

  const finalMessage =
    message || "Olá! Gostaria de conversar sobre um projeto.";
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  redirect(whatsappUrl);
}
