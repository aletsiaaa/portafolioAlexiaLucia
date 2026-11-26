"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell container">
    <Link href="/#inicio" className="wordmark" aria-label="Ir a Inicio"><span className="monogram">al.</span><span>alexia lucía</span></Link>
    <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navegación principal">
      {mainNav.slice(0,6).map(n => <Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}
      <Link href="/#contacto" className="mobile-contact" onClick={()=>setOpen(false)}>Contacto</Link>
    </nav>
    <Link href="/#contacto" className="nav-cta">Hablemos <ArrowUpRight size={16}/></Link>
    <button type="button" className="nav-toggle" onClick={()=>setOpen(x=>!x)} aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X size={23}/> : <Menu size={23}/>}</button>
  </div></header>;
}
