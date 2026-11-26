export const site = {
  fullName: "Alexia Lucía Díaz Gómez",
  name: "Alexia Lucía",
  headline: "Bachiller general · Tecnología con propósito",
  motto: "Creo en las ideas que conectan conocimiento, creatividad e impacto.",
  // Estas variables evitan inventar cuentas/enlaces y te permiten decidir qué es público.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
};

export const mainNav = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Habilidades", href: "/#habilidades" },
  { label: "Formación", href: "/#formacion" },
  { label: "Contacto", href: "/#contacto" },
];
