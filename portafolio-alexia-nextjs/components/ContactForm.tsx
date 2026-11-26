"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

type Status = {type: "success" | "error"; message: string} | null;
export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const payload = { name: String(formData.get("name")||"").trim(), email: String(formData.get("email")||"").trim(), message: String(formData.get("message")||"").trim(), website: String(formData.get("website")||"") };
    setLoading(true); setStatus(null);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
      const data: {message?: string} = await response.json();
      if (!response.ok) throw new Error(data.message || "No fue posible enviar el mensaje.");
      setStatus({type:"success",message:data.message || "¡Mensaje enviado!"}); form.reset();
    } catch(error) { setStatus({type:"error",message:error instanceof Error ? error.message : "Ocurrió un error al enviar."}); }
    finally {setLoading(false);}
  }
  return <form className="contact-form flex flex-col" onSubmit={submit}>
    <label htmlFor="c-name">Tu nombre</label><input id="c-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={80} placeholder="¿Cómo te llamas?" required />
    <label htmlFor="c-email">Correo electrónico</label><input id="c-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="tunombre@correo.com" required />
    <label htmlFor="c-message">Tu mensaje</label><textarea id="c-message" name="message" minLength={10} maxLength={3000} rows={4} placeholder="Cuéntame sobre tu idea o propuesta..." required />
    <div className="honeypot" aria-hidden="true"><label htmlFor="c-website">Deja este campo vacío</label><input id="c-website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <button className="btn btn-dark" type="submit" disabled={loading}>{loading ? <><LoaderCircle className="spin" size={18}/> Enviando...</> : <>Enviar mensaje <ArrowRight size={18}/></>}</button>
    {status && <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>}
  </form>;
}
