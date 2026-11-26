import { NextResponse } from "next/server";

export const runtime = "nodejs";
const json = (message:string, status:number) => NextResponse.json({ok: status >= 200 && status < 300, message}, {status, headers: {"Cache-Control":"no-store"}});
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitize = (s:string) => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c] || c));

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) return json("Envía la información en formato JSON.",415);
  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 5000) return json("El mensaje es demasiado largo.",413);
    body = JSON.parse(raw);
  } catch { return json("La solicitud no contiene un JSON válido.",400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json("Datos incompletos.",400);
  const data = body as Record<string,unknown>;
  if (typeof data.website === "string" && data.website.trim()) return json("Mensaje recibido.",200); // señuelo antispam: no envía nada
  if (typeof data.name !== "string" || typeof data.email !== "string" || typeof data.message !== "string") return json("Completa todos los campos.",400);
  const name = data.name.trim(), email = data.email.trim(), message = data.message.trim();
  if (name.length < 2 || name.length > 80) return json("El nombre debe tener entre 2 y 80 caracteres.",400);
  if (email.length > 254 || !emailPattern.test(email)) return json("Introduce un correo válido.",400);
  if (message.length < 10 || message.length > 3000) return json("El mensaje debe tener entre 10 y 3000 caracteres.",400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return json("El formulario todavía no está configurado para enviar correos. Contacta por otro medio.",503);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type":"application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Contacto desde el portafolio: ${name.replace(/[\r\n]/g," ")}`,
        reply_to: email,
        text: `De: ${name}\nCorreo: ${email}\n\n${message}`,
        html: `<h2>Nuevo contacto desde el portafolio</h2><p><strong>Nombre:</strong> ${sanitize(name)}</p><p><strong>Correo:</strong> ${sanitize(email)}</p><p style="white-space:pre-wrap">${sanitize(message)}</p>`
      }),
      cache: "no-store"
    });
    if (!response.ok) {
      console.error("Error en proveedor de correo. Estado:", response.status);
      return json("No pudimos entregar tu mensaje. Inténtalo nuevamente más tarde.",502);
    }
    return json("¡Gracias! Tu mensaje fue enviado correctamente.",200);
  } catch (error) {
    console.error("Error de red al enviar contacto",error);
    return json("No fue posible conectar con el servicio de mensajes.",502);
  }
}
