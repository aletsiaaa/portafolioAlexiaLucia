import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.fullName} | Ideas que toman forma`,
  description: "Portafolio digital de Alexia Lucía: desarrollo, datos, inteligencia artificial, creatividad y proyectos de impacto social.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
