import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Code2, Github, Globe2, GraduationCap, HeartHandshake, Linkedin, Lightbulb, Mail, Map, Palette, Sparkles, TerminalSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects, sideProjects } from "@/content/projects";
import { site } from "@/lib/site";

const skillGroups = [
 {number:"01",title:"Programación",intro:"El lenguaje de mis ideas.",items:["Python", "TypeScript (en desarrollo)", "Algoritmos y lógica"]},
 {number:"02",title:"Desarrollo web",intro:"De bocetos a interfaces.",items:["React y Next.js (en aprendizaje)","Tailwind CSS", "HTML / CSS", "API REST"]},
 {number:"03",title:"Bases de datos",intro:"Guardar y organizar información.",items:["SQLite (nivel inicial)", "Tablas y registros"]},
 {number:"04",title:"IA y Machine Learning",intro:"Entender los patrones.",items:["Pandas · NumPy", "K-Means · KNN", "Regresión lineal", "Visualización de datos"]},
 {number:"05",title:"Herramientas",intro:"Organizar, crear y comunicar.",items:["Microsoft Excel Expert", "Word · PowerPoint", "Power BI", "Canva · Arduino", "Git / GitHub (en aprendizaje)"]}
];

export default function Home(){
 return <><Header/><main>
   <section id="inicio" className="hero"><div className="container hero-grid"><div className="hero-copy relative z-10">
     <div className="eyebrow hero-eyebrow"><span className="dot"/> HOLA, BIENVENIDA/O A MI ESPACIO DIGITAL</div>
     <p className="hero-overline">PORTAFOLIO PERSONAL / 2026</p>
     <h1>Ideas que<br/><em>toman</em> <span className="underlined-hero">forma.</span></h1>
     <p className="hero-summary">Soy <strong>Alexia Lucía Díaz Gómez</strong>, bachiller general apasionada por aprender, crear y transformar ideas en soluciones con propósito.</p>
     <div className="hero-actions"><Link href="#proyectos" className="btn btn-dark">Explorar proyectos <ArrowUpRight size={18}/></Link><Link href="#sobre-mi" className="text-link">Conóceme <ArrowDownRight size={18}/></Link></div>
     
   </div><div className="portrait-column"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="portrait-frame"><Image src="/imagenes/foto-alexia.jpg" alt="Fotografía de Alexia Lucía" width={1480} height={830} priority className="portrait-photo"/></div><div className="portrait-sticker">✳</div></div></div></section>

   <section id="sobre-mi" className="section section-about"><div className="container about-grid"><div><div className="section-heading"><p className="eyebrow">01 / SOBRE MÍ</p><h2>Más allá<br/>del <em>código.</em></h2></div><div className="about-floating"><span className="about-star">✺</span></div></div><div className="about-text"><p className="lead-paragraph">Me describo como una persona <strong>responsable, perseverante, creativa y proactiva</strong>, con interés por el aprendizaje continuo y el liderazgo.</p><p>Me gradué de Bachillerato General y complementé mi formación en el Centro ¡Supérate! Fundación Frech, donde participé en proyectos tecnológicos, colaborativos y de innovación social.</p><p>Me interesan la tecnología, la psicología, los idiomas y las artes. Aspiro a continuar mis estudios universitarios y aprovechar lo que aprendo para desarrollar proyectos útiles, humanos y sostenibles.</p>
    <div className="interest-grid"><div><Palette size={22}/><span>Arte y creatividad</span></div><div><HeartHandshake size={22}/><span>Impacto social</span></div><div><Globe2 size={22}/><span>Idiomas y culturas</span></div><div><Code2 size={22}/><span>Tecnología e IA</span></div></div>
   </div></div></section>

   <section id="experiencia" className="section section-experience"><div className="container"><div className="section-top"><div><p className="eyebrow">02 / EXPERIENCIA</p><h2>Aprender <em>haciendo.</em></h2></div><p>Mi trayectoria se ha construido a través de proyectos, liderazgo y experiencias de voluntariado.</p></div>
    <div className="timeline"><article><span className="timeline-date">2024 — 2026</span><span className="timeline-rail"/><div><p className="timeline-category">FORMACIÓN + INNOVACIÓN</p><h3>Centro ¡Supérate! Fundación Frech</h3><p>Participación en retos académicos y tecnológicos, trabajo colaborativo, desarrollo de soluciones y aprendizaje de herramientas digitales.</p><div className="tag-stack"><span>IA y Machine Learning</span><span>Comunicación</span><span>Trabajo en equipo</span></div></div></article>
    <article><span className="timeline-date">2026</span><span className="timeline-rail"/><div><p className="timeline-category">PROYECTOS TECNOLÓGICOS</p><h3>Hackathon, Expo de Logros y Expo Tech</h3><p>Presentación de DeafCom, Sunergy y Safen: ideas centradas en accesibilidad, sostenibilidad y respuesta ante emergencias.</p><div className="tag-stack"><span>Innovación social</span><span>Arduino</span><span>Power Apps</span></div></div></article>
    <article><span className="timeline-date">2024</span><span className="timeline-rail"/><div><p className="timeline-category">VOLUNTARIADO</p><h3>Campamento de voluntariado · TECHO El Salvador</h3><p>Experiencia de colaboración y servicio comunitario que fortaleció mi empatía, responsabilidad social y trabajo en equipo.</p><div className="tag-stack"><span>Solidaridad</span><span>Compromiso social</span></div></div></article></div>
   </div></section>

   <section id="proyectos" className="section section-projects"><div className="container"><div className="section-top"><div><p className="eyebrow">03 / PROYECTOS DEL CURSO</p><h2>Mis <em>proyectos.</em></h2></div></div>
    <div className="projects-grid grid">{projects.map((p,i)=><Link key={p.slug} href={`/proyectos/${p.slug}`} className={`project-card ${i===0 ? "project-featured" : ""}`}><div className="project-card-meta"><span>{p.week}</span><span className="project-arrow"><ArrowUpRight size={20}/></span></div><ProjectVisual kind={p.kind} compact/><div className="project-card-bottom flex flex-col flex-1"><p className="project-category">{p.category}</p><h3>{p.title}</h3><p>{p.summary}</p><div className="project-tech">{p.tools.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><span className="project-detail-link">Explorar proyecto <ArrowRight size={16}/></span></div></Link>)}</div>
    <div className="side-projects-heading"><div><p className="eyebrow">OTRAS EXPERIENCIAS</p><h3>Innovación con <em>propósito.</em></h3></div><span>Hackathon · Expo de Logros · Expo Tech</span></div>
    <div className="side-projects">{sideProjects.map((p,i)=><article key={p.title}><div className="side-num">0{i+1} / {p.eyebrow}</div><div className="side-icon"><Lightbulb size={26}/></div><h4>{p.title}</h4><p>{p.description}</p><span>{p.tools}</span></article>)}</div>
   </div></section>

   <section id="habilidades" className="section section-skills"><div className="container"><div className="section-top"><div><p className="eyebrow">04 / HABILIDADES</p><h2>Herramientas para<br/><em>construir.</em></h2></div></div>
    <div className="skills-grid grid">{skillGroups.map(g=><article key={g.title}><div className="skill-top"><span>{g.number} /</span><TerminalSquare size={23}/></div><h3>{g.title}</h3><p>{g.intro}</p><div className="skills-list">{g.items.map(i=><span key={i}>{i}</span>)}</div></article>)}</div>
    <div className="soft-skills"><strong>Habilidades personales</strong><div>{["Liderazgo", "Pensamiento crítico", "Comunicación efectiva", "Creatividad", "Resolución de problemas", "Trabajo en equipo"].map(s=><span key={s}>{s}</span>)}</div></div>
   </div></section>

   <section id="formacion" className="section section-education"><div className="container education-grid"><div className="section-heading"><p className="eyebrow">05 / FORMACIÓN ACADÉMICA</p><h2>Aprender es<br/><em>evolucionar.</em></h2><div className="education-doodle">✧ <span>keep learning</span> ✧</div></div><div className="education-list"><article><span className="edu-icon"><GraduationCap size={24}/></span><div><span className="small-label">2025 — 2026</span><h3>Bachillerato General</h3><p>Centro Escolar Católico Alberto Masferrer</p></div></article><article><span className="edu-icon"><BookOpen size={24}/></span><div><span className="small-label">2024 — 2026</span><h3>Formación complementaria</h3><p>Centro ¡Supérate! Fundación Frech · Inglés, informática, valores y proyectos tecnológicos.</p></div></article><article><span className="edu-icon"><Sparkles size={24}/></span><div><span className="small-label">CERTIFICACIONES · 2026</span><h3>MOS Excel Expert</h3><p>Dominio avanzado de Microsoft Excel.</p><h3 className="cert-extra">TOEIC Speaking & Writing</h3><h3 className="cert-extra">TOEIC Listening & Reading</h3><p>Certificaciones de inglés.</p></div></article><article><span className="edu-icon"><Globe2 size={24}/></span><div><span className="small-label">IDIOMAS</span><h3>Español · Nativo</h3><h3 className="cert-extra">Inglés · B2</h3></div></article></div></div></section>

   <section id="contacto" className="section section-contact"><div className="container contact-grid"><div className="contact-intro"><p className="eyebrow">06 / CONTACTO</p><h2>¿Creamos algo<br/><em>significativo?</em></h2><p>Siempre hay una buena idea que comienza con una conversación. Si quieres conocer mi trabajo o proponer una colaboración académica, puedes escribirme aquí.</p>
    <div className="contact-details"><div className="contact-detail-icon"><Mail size={21}/></div><div><span>CORREO ELECTRÓNICO</span>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <p>Configura un correo público en el archivo de entorno antes de publicar.</p>}</div></div>
    <div className="social-links">{site.github && <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a>}</div>
    <span className="contact-spark">✳</span>
   </div><div className="form-panel"><div className="form-panel-header"><span>INICIEMOS UNA CONVERSACIÓN</span><Map size={21}/></div><h3>Déjame un mensaje.</h3><ContactForm/></div></div></section>
 </main><footer className="site-footer"><div className="container footer-inner"><div><span className="footer-mark">al.</span><p>Ideas que toman forma. ♡</p></div><div><span>Hecho con curiosidad, creatividad y código.</span><span>© 2026 Alexia Lucía Díaz Gómez</span></div><Link href="#inicio" className="back-top">Volver arriba ↑</Link></div></footer></>;
}
