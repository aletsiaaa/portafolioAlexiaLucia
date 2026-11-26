# Portafolio digital · Alexia Lucía Díaz Gómez

**Ideas que toman forma.** Sitio personal para reunir estudios, habilidades, proyectos de tecnología y las actividades del período de 10 semanas del curso de inteligencia artificial.

> **Estado:** versión actualizada con código fuente y video original del laberinto, y enlace al notebook de regresión lineal. Antes de entregar aún hay que confirmar el contenido de ese notebook, agregar las demás evidencias, comprobar el build, configurar el correo, crear el repositorio independiente y desplegar en Vercel. El archivo no está publicado automáticamente.

## Tecnologías

- **React + Next.js (App Router)** para interfaz, rutas y backend.
- **TypeScript** para la organización y tipos.
- **Tailwind CSS v4** como base de estilos, complementado con CSS editorial propio.
- **Lucide React** para iconos.
- **Git / GitHub** para versiones, y **Vercel** para despliegue (pendiente en tu cuenta).
- **API REST** de Next.js y **Resend** (opcional, requiere configuración) para enviar formularios.

## Captura de pantalla

**Pendiente:** Ejecuta el proyecto en tu equipo y guarda una captura real de la portada en `public/imagenes/captura-portafolio.png`; luego cambia esta sección por `![Captura del portafolio](public/imagenes/captura-portafolio.png)`. No se incluye una captura falsa.

## Ejecutar el proyecto

Requisitos: **Node.js 20.9+**, npm y una terminal.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para compilar:

```bash
npm run typecheck
npm run build
npm run start
```

En Windows, copia `.env.example` manualmente y renómbralo a `.env.local`.

## Estructura

```text
app/
  page.tsx                     # inicio y 7 secciones
  proyectos/[slug]/page.tsx    # páginas de cada reto
  api/contact/route.ts         # POST /api/contact
  globals.css                  # identidad visual y responsive
components/                    # Header, ContactForm, ProjectVisual
content/projects.ts           # información y evidencias por proyecto
lib/site.ts                   # nombre, enlaces y correo público
public/imagenes/              # retrato y capturas
public/evidencias/             # capturas y video reales, y visualizaciones identificadas
public/codigo/laberinto.py     # fuente original proporcionada para el laberinto
docs/                          # lista de verificación y guion de presentación
```

## Secciones

1. Inicio / Hero: nombre, foto, presentación y navegación.
2. Sobre mí: formación, intereses, objetivos, fortalezas.
3. Experiencia: trayectoria en ¡Supérate!, iniciativas y voluntariado TECHO.
4. Proyectos: regresión lineal, laberinto, AI Challenge, hotspots y aplicación web, **con fichas detalladas**.
5. Habilidades: programación, web, datos, herramientas y habilidades personales.
6. Formación: bachillerato, ¡Supérate!, certificaciones TOEIC y Excel Expert, idiomas.
7. Contacto: correo público configurable y formulario con validación y API.

## Endpoint del formulario

`POST /api/contact` recibe JSON:

```json
{"name":"Persona interesada","email":"correo@example.org","message":"Me interesa conocer más sobre tu trabajo.","website":""}
```

Responde JSON con `{ "ok": boolean, "message": string }`. Valida nombre (2–80), correo (formato y máximo 254) y mensaje (10–3000) también en el servidor. Incluye un campo señuelo antispam y se escapa HTML del mensaje para su visualización en el correo.

**IMPORTANTE:** el endpoint solo envía correos cuando el servicio de envío está configurado. De lo contrario responde `503`, nunca inventa un envío exitoso. Para activarlo, crea una cuenta en el proveedor de email elegido, configura un remitente/dominio verificado según sus requisitos, y añade en `.env.local` y en **Vercel → Settings → Environment Variables**:

```env
RESEND_API_KEY=tu_clave_privada
CONTACT_TO_EMAIL=correo_de_destino_verificado
CONTACT_FROM_EMAIL=Portafolio <contacto@tu-dominio-verificado.com>
NEXT_PUBLIC_CONTACT_EMAIL=correo_publico_que_quieres_mostrar
NEXT_PUBLIC_GITHUB_URL=https://github.com/TU_USUARIO
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/TU_PERFIL
```

No copies estos valores literales como datos reales. **Nunca subas `.env.local` a GitHub.** En Resend, los remitentes y destinatarios permitidos en pruebas tienen restricciones: consulta su documentación. Si prefieres otro proveedor, modifica el método POST conservando las validaciones y respuestas.

## Proyectos y evidencias

Edita `content/projects.ts` y sigue `docs/EVIDENCIAS-PENDIENTES.md`. Cada ficha tiene problema, objetivo, herramientas, procedimiento, resultados confirmados y apartado reservado para los archivos originales. El laberinto ya incluye código fuente `public/codigo/laberinto.py`, un video `.mp4` original y tres capturas extraídas de ese mismo video. La ficha de regresión incluye el [enlace al cuaderno de Google Colab](https://colab.research.google.com/drive/1JdNEOVtKKmBXlZXub3pOQljFDMoVDxqB), pero todavía requiere la exportación `.ipynb` para verificar los resultados. Consulta `docs/FICHAS-REGRESION-LABERINTO.md` para la documentación detallada.

Las dos imágenes `hotspots-*-presentacion.png` **sí** son capturas de diapositivas de la presentación académica; el dibujo `hotspots-visualizacion.svg` es una ilustración complementaria y **no** una captura real del mapa Folium.

Cuando copies una captura verdadera a `public/evidencias/`, agrega en el proyecto una entrada en `evidenceImages`, por ejemplo:

```ts
{ src: "/evidencias/regresion-grafica.png", label: "Gráfica original", alt: "Recta de regresión", type: "evidencia" }
```

Para enlazar código, cambia `repository` del proyecto por el enlace verificable a **tu propio** repositorio. No publiques nombres/fotografías de compañeros o documentos del equipo sin consentimiento.

## Crear repositorio y publicar en Vercel

1. Crea **un repositorio nuevo** en tu cuenta de GitHub, por ejemplo `portafolio-alexia-lucia`. No hagas fork del repositorio del profesor.
2. Abre una terminal dentro de esta carpeta y ejecuta:

```bash
git init
git add .
git commit -m "feat: crear base original del portafolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio-alexia-lucia.git
git push -u origin main
```

3. Continúa haciendo commits descriptivos cuando agregues evidencias y ajustes.
4. En [Vercel](https://vercel.com/) inicia sesión con GitHub e importa tu repositorio **propio**.
5. Configura las variables de entorno necesarias (si habilitas el formulario) y presiona Deploy.
6. Abre la URL real, prueba inicio, navegación, 5 fichas, enlaces, móvil y el endpoint antes de la entrega.
7. Actualiza este README con `![Captura de pantalla](public/imagenes/captura-portafolio.png)` y la URL real de tu sitio.

**URL pública:** pendiente de desplegar (no se ha inventado una URL).

## Aprendizajes

Esta página integra React y componentes reutilizables, rutas dinámicas con Next.js, tipado TypeScript, un sistema visual responsive con Tailwind/CSS, validación en frontend y backend y respuestas HTTP mediante API REST. Las evidencias del curso muestran un recorrido de regresión lineal a algoritmos de clasificación y análisis geográfico.

## Notas de privacidad y autenticidad

- Se omitieron fecha de nacimiento, teléfono, ubicación detallada y contactos de referencias: no son necesarios en una web pública.
- El correo del CV debe confirmarse antes de publicarse; no se ha alterado ni adivinado.
- No se inventaron resultados numéricos, enlaces a repositorios ni capturas de actividades.
- El retrato se recortó de la imagen del CV compartida para esta tarea.
- El reto de Hotspots se describe como **prototipo académico** de muestra pequeña, no como análisis comercial validado.

**Tema sugerido de GitHub:** `portfolio`, `nextjs`, `react`, `typescript`, `tailwindcss`, `machine-learning`, `student-portfolio`.

## Evidencia adicional: AI Challenge

La sección `/proyectos/ai-challenge` contiene el notebook original, el script `.py`, dos visualizaciones extraídas de la salida del notebook y el resumen verificado `docs/FICHA-AI-CHALLENGE.md`. Los 500 datos del ejercicio son simulados.

## Personalización de noviembre de 2026

La tarjeta «Mi portafolio digital» se eliminó de la colección de actividades; el sitio sigue siendo un portafolio Next.js. Se aplicó una paleta azul/celeste/rosa, se incorporó la fotografía proporcionada corregida de orientación y se ocultaron notas internas de trabajos pendientes en la interfaz, manteniéndolas documentadas en `docs/`.
