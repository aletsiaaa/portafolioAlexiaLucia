import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileCode2, ImageIcon, ExternalLink, Film } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Header } from "@/components/Header";

type Props = {params: Promise<{slug:string}>};
export async function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title: p ? `${p.title} | Alexia Lucía` : "Proyecto no encontrado"};}
export default async function ProjectPage({params}:Props){
  const {slug}=await params;
  const p = projects.find(p=>p.slug===slug) ?? notFound();
  return <><Header/><main className="project-detail">
    <div className="container detail-top"><Link href="/#proyectos" className="back-link"><ArrowLeft size={17}/> Volver a proyectos</Link><span className="eyebrow">{p.week} · {p.category}</span>
      <h1>{p.title}<span className="title-accent">.</span></h1><p className="detail-lead">{p.subtitle}</p>
      <div className="detail-hero-art"><ProjectVisual kind={p.kind}/></div>
    </div>
    <div className="container detail-grid"><div>
      <section className="detail-section"><p className="section-index">01 / DESCRIPCIÓN DE LA ACTIVIDAD</p><h2>¿En qué consistió?</h2><p>{p.summary}</p></section>
      <section className="detail-section"><p className="section-index">02 / EL PROBLEMA</p><h2>¿Qué buscaba resolver?</h2><p>{p.question}</p></section>
      <section className="detail-section"><p className="section-index">03 / OBJETIVO</p><h2>La meta del proyecto</h2><p>{p.objective}</p></section>
      <section className="detail-section"><p className="section-index">04 / IMPLEMENTACIÓN</p><h2>De la idea al algoritmo</h2><ol className="steps">{p.approach.map((a,i)=><li key={a}><span>{String(i+1).padStart(2,"0")}</span>{a}</li>)}</ol></section>
      <section className="detail-section"><p className="section-index">05 / RESULTADOS</p><h2>Lo que se consiguió</h2><ul className="results-list">{p.results.map(r=><li key={r}><CheckCircle2 size={19}/>{r}</li>)}</ul></section>
      <section className="detail-section"><p className="section-index">06 / CÓDIGO Y EVIDENCIAS</p><h2>Explora el trabajo</h2>
        {p.evidenceImages.length>0 && <div className="evidence-gallery">{p.evidenceImages.map(e=><figure key={e.src}><Image src={e.src} alt={e.alt} width={920} height={490} className="evidence-image"/><figcaption><ImageIcon size={15}/> {e.label}</figcaption></figure>)}</div>}
        {p.evidenceVideo && <figure className="evidence-video"><video controls preload="metadata" playsInline poster={p.evidenceVideo.poster} aria-label={p.evidenceVideo.label}><source src={p.evidenceVideo.src} type="video/mp4"/>Tu navegador no admite este video.</video><figcaption><Film size={16}/> {p.evidenceVideo.label}</figcaption></figure>}
        {p.sourceFiles && p.sourceFiles.length > 0 && <div className="source-list"><h3>Código fuente y archivos</h3>{p.sourceFiles.map(f=><div className="source-item" key={f.href}><div><FileCode2 size={20}/><div><strong>{f.label}</strong><p>{f.description}</p></div></div><a href={f.href} target="_blank" rel="noopener noreferrer" aria-label={f.label}><ExternalLink size={18}/><span> Abrir archivo</span></a></div>)}</div>}
        
        {p.repository && <a className="btn btn-dark" href={p.repository} target="_blank" rel="noopener noreferrer">Ver código fuente <ArrowUpRight size={18}/></a>}
      </section>
    </div><aside className="detail-sidebar"><div className="sidebar-box"><p className="eyebrow">FICHA DEL PROYECTO</p><h3>{p.title}</h3><div className="sidebar-sep"/><span className="sidebar-label">PERÍODO</span><p>{p.week}</p><span className="sidebar-label">CATEGORÍA</span><p>{p.category}</p><span className="sidebar-label">TECNOLOGÍAS</span><div className="tag-stack">{p.tools.map(t=><span key={t}>{t}</span>)}</div></div></aside></div>
    <div className="container detail-next"><span className="eyebrow">SIGUE EXPLORANDO</span><Link href="/#proyectos">Conoce más proyectos <ArrowUpRight size={19}/></Link></div>
  </main><footer className="detail-footer"><div className="container">© 2026 Alexia Lucía Díaz Gómez · Diseñado con curiosidad.</div></footer></>;
}
