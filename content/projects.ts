export type Project = {
  slug: string;
  number: string;
  week: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  question: string;
  objective: string;
  tools: string[];
  approach: string[];
  results: string[];
  honesty: string;
  evidenceNeeded: string[];
  kind: "regression" | "maze" | "students" | "map" | "web";
  repository?: string;
  sourceFiles?: { href: string; label: string; description: string }[];
  evidenceVideo?: { src: string; poster: string; label: string };
  evidenceImages: { src: string; label: string; alt: string; type: "evidencia" | "ilustracion" }[];
};

export const projects: Project[] = [
  {
    slug: "regresion-lineal", number: "01", week: "SEMANA 03", title: "Regresión lineal",
    subtitle: "Análisis de relaciones y predicciones", category: "Machine Learning · Aprendizaje supervisado",
    summary: "Actividad de la tercera semana del curso, dedicada a comprender cómo una relación lineal puede utilizarse para analizar datos y estimar valores numéricos. El cuaderno original está enlazado en Google Colab.",
    question: "¿Cómo podemos describir la relación entre una variable de entrada y una variable numérica de salida, y utilizarla para realizar estimaciones?",
    objective: "Comprender el funcionamiento de la regresión lineal, interpretar la recta obtenida y documentar los datos, las predicciones y la visualización resultante del ejercicio.",
    tools: ["Google Colab", "Python", "Regresión lineal"],
    approach: [
      "Trabajar en un cuaderno de Google Colab, donde se pueden organizar los datos, el código y los resultados del ejercicio.",
      "Analizar la relación entre dos variables numéricas y estudiar cómo una recta aproxima su comportamiento.",
      "Explicar la diferencia entre observaciones reales y valores estimados, e interpretar los resultados y su gráfica cuando se incorporen las evidencias del notebook."
    ],
    results: [
      "Se dispone del enlace al cuaderno de Google Colab compartido para la actividad de la semana 3.",
      "Las variables específicas, la gráfica, las predicciones y las métricas definitivas requieren revisar el contenido del notebook; no se inventan resultados."
    ],
    honesty: "El enlace de Colab solicita iniciar sesión desde la consulta disponible. Por eso todavía no se ha podido verificar su contenido, variables, código ni resultados. Esta ficha describe el propósito académico de la actividad, no datos numéricos confirmados.",
    sourceFiles: [{ href: "https://colab.research.google.com/drive/1JdNEOVtKKmBXlZXub3pOQljFDMoVDxqB", label: "Abrir cuaderno en Google Colab", description: "Enlace original aportado para regresión lineal; puede requerir permiso de acceso." }],
    evidenceNeeded: ["Archivo .ipynb o exportación del notebook para integrar el código visible", "Captura auténtica del dataset y los resultados de ejecución", "Gráfico original y explicación de las predicciones", "Métricas del modelo únicamente si fueron calculadas en la actividad"],
    kind: "regression", evidenceImages: []
  },
  {
    slug: "laberinto", number: "02", week: "SEMANA 04", title: "Laberinto interactivo",
    subtitle: "Exploración de rutas y toma de decisiones", category: "Algoritmos · Búsqueda en profundidad",
    summary: "Juego de escritorio programado en Python que genera laberintos aleatorios, encuentra rutas posibles y permite a una persona resolverlos mientras mide sus movimientos y su eficiencia. Se incluyen el código aportado y un video real de funcionamiento.",
    question: "¿Cómo generar un laberinto con obstáculos, explorar distintas decisiones sin repetir casillas y encontrar el recorrido más corto hasta la meta?",
    objective: "Aplicar algoritmos de búsqueda y retroceso para explorar rutas, construir una interfaz jugable y almacenar los resultados para comparar el desempeño de diferentes partidas.",
    tools: ["Python", "Tkinter", "SQLite", "DFS (búsqueda en profundidad)", "Backtracking", "Visual Studio Code"],
    approach: [
      "Generar una cuadrícula aleatoria de 21 × 15 casillas. Un algoritmo recursivo cava pasillos y se abren cinco paredes adicionales para ofrecer rutas alternativas.",
      "Representar cada movimiento permitido como una decisión y recorrer los caminos con búsqueda en profundidad (DFS) y backtracking. Guardar las rutas sin repetir casillas y ordenarlas por longitud para identificar la más corta.",
      "Dibujar paredes, jugador, meta y rutas con Tkinter. Permitir desplazamiento con flechas, N para visualizar rutas, R para crear otro laberinto y T para consultar el ranking.",
      "Calcular la eficiencia de cada partida a partir de la ruta más corta y los movimientos realizados. Guardar nombre, movimientos y porcentaje en una base SQLite llamada laberinto.db."
    ],
    results: [
      "El código compartido contiene la generación de laberintos, búsqueda y ordenamiento de rutas, controles de teclado, puntuación y registro en SQLite.",
      "El video demuestra la ejecución de la interfaz, la representación de diferentes rutas y una partida completada con 88 % de eficiencia.",
      "Las capturas de esta página fueron extraídas del video original del funcionamiento, no generadas como simulación."
    ],
    honesty: "En este proyecto, «árbol de decisiones» se refiere a la exploración de alternativas mediante DFS y retroceso, no a un clasificador de Machine Learning entrenado. El porcentaje de 88 % corresponde a la partida grabada; puede variar en otras ejecuciones.",
    sourceFiles: [{ href: "/codigo/laberinto.py", label: "Consultar código fuente Python", description: "Archivo .py proporcionado para documentar la actividad." }],
    evidenceVideo: { src: "/evidencias/laberinto-demostracion.mp4", poster: "/evidencias/laberinto-tablero.jpg", label: "Grabación real del juego y sus rutas" },
    evidenceNeeded: ["Enlace a un repositorio específico de la actividad, si existe", "Captura adicional del ranking SQLite (tecla T) si quieres mostrar esa función en pantalla", "Enlace a un cuaderno de Colab del laberinto, únicamente si efectivamente lo utilizaste"],
    kind: "maze", evidenceImages: [
      { src: "/evidencias/laberinto-tablero.jpg", label: "Ejecución real · interfaz del laberinto", alt: "Video del programa Python ejecutándose en el escritorio y mostrando el laberinto", type: "evidencia" },
      { src: "/evidencias/laberinto-rutas.jpg", label: "Ejecución real · visualización de las rutas", alt: "Interfaz del laberinto con ruta marcada en color cian", type: "evidencia" },
      { src: "/evidencias/laberinto-resultado.jpg", label: "Ejecución real · partida completada", alt: "Pantalla final del laberinto que indica juego ganado y eficiencia de 88 por ciento", type: "evidencia" }
    ]
  },
  {
    slug: "ai-challenge", number: "03", week: "AI CHALLENGE", title: "AI Challenge",
    subtitle: "K-Means y KNN aplicados a hábitos de estudio", category: "Machine Learning · Agrupamiento y clasificación",
    summary: "Actividad práctica de Machine Learning con un conjunto de 500 estudiantes simulados. Se analizaron patrones de horas de estudio, asistencia, tareas y notas mediante K-Means; luego se utilizó KNN para clasificar posibles resultados académicos. El notebook original y sus dos gráficas se encuentran disponibles como evidencia.",
    question: "¿Podemos identificar grupos con comportamientos académicos similares y estimar si un nuevo estudiante aprobaría según sus horas de estudio, asistencia y tareas?",
    objective: "Aplicar y comparar dos algoritmos de aprendizaje automático: K-Means para descubrir agrupaciones sin etiquetas y KNN para predecir la categoría «Aprobado» o «Reprobado», evaluando diferentes números de vecinos y el efecto de normalizar las variables.",
    tools: ["Google Colab", "Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn", "StandardScaler", "K-Means", "KNN"],
    approach: [
      "Generar de manera reproducible 500 registros sintéticos (semilla aleatoria 42) con horas de estudio, porcentaje de asistencia, realización de tareas y una calificación calculada con esos factores y una variación aleatoria. Etiquetar como «Aprobado» cuando la nota es de 6 o más.",
      "Aplicar StandardScaler a horas, asistencia, tareas y nota para realizar agrupaciones K-Means con 3 y con 4 clusters; visualizar cada agrupación mediante gráficas de horas de estudio frente a nota.",
      "Mostrar las características promedio de los grupos mediante los centros de K-Means transformados de regreso a las unidades originales.",
      "Para KNN utilizar como entradas horas, asistencia y tareas, y como objetivo la etiqueta de aprobación. Separar 75 % para entrenamiento y 25 % para prueba de manera estratificada; normalizar las entradas usando solo el conjunto de entrenamiento para ajustar el escalador.",
      "Probar 1, 3, 5, 7, 11, 15 y 21 vecinos; comparar exactitudes con y sin normalización y seleccionar el mejor K según los resultados normalizados.",
      "Usar el modelo elegido para predecir el resultado de un caso nuevo con 4 horas de estudio, 55 % de asistencia y 50 % de tareas."
    ],
    results: [
      "Se trabajó con 500 registros generados artificialmente; las tablas y las dos gráficas de K-Means aparecen en el notebook original.",
      "K-Means generó agrupaciones de 3 y 4 clusters; las dos visualizaciones originales permiten comparar cómo cambia la distribución de grupos.",
      "KNN evaluó 125 registros de prueba. Entre los modelos normalizados, el mayor porcentaje de aciertos fue 81.60 % con K = 15.",
      "Sin normalización, la exactitud más alta de la comparación fue 82.40 % (K = 3 y K = 15). Por eso, normalizar no mejoró la exactitud en todos los casos de este ejercicio.",
      "El nuevo caso (4 horas, 55 % de asistencia, 50 % de tareas) fue clasificado como «Reprobado» por el modelo seleccionado."
    ],
    honesty: "Todos los perfiles y notas fueron generados con datos sintéticos y una regla interna; no representan estudiantes reales. El 81.60 % es la exactitud reportada en la partición de prueba del notebook con normalización, no una garantía de predicciones en situaciones reales. La clasificación de «Reprobado» es un resultado del modelo de práctica, no una evaluación individual.",
    sourceFiles: [
      { href: "/codigo/AI_Challenge_Kmeans_KNN.ipynb", label: "Descargar notebook original (.ipynb)", description: "Cuaderno de Google Colab entregado, con código, resultados impresos y gráficas integradas." },
      { href: "/codigo/AI_Challenge_Kmeans_KNN.py", label: "Consultar código Python (.py)", description: "El mismo código de la única celda del cuaderno, exportado para facilitar su lectura." },
      { href: "/codigo/AI_Challenge_Resultados.md", label: "Ver resultados y tabla KNN", description: "Resumen verificable de métricas y resultados transcritos del cuaderno." }
    ],
    evidenceNeeded: ["Agregar el enlace al repositorio de GitHub de esta actividad, si existe", "Opcional: capturas propias de la ejecución en Google Colab para acompañar las imágenes incorporadas"],
    kind: "students", evidenceImages: [
      { src: "/evidencias/ai-challenge-kmeans-3-grupos.png", label: "Gráfica original · K-Means con 3 grupos", alt: "Gráfica original del cuaderno: horas de estudio frente a notas coloreadas según tres clusters de K-Means", type: "evidencia" },
      { src: "/evidencias/ai-challenge-kmeans-4-grupos.png", label: "Gráfica original · K-Means con 4 grupos", alt: "Gráfica original del cuaderno: horas de estudio frente a notas coloreadas según cuatro clusters de K-Means", type: "evidencia" }
    ]
  },
  {
    slug: "hotspots-comerciales", number: "04", week: "PROYECTO INTEGRADOR", title: "Hotspots comerciales",
    subtitle: "Exploración geográfica de cines", category: "Datos abiertos · ML geográfico",
    summary: "Un prototipo académico que combinó datos abiertos, K-Means, KNN y visualización para explorar cines de la zona oriental salvadoreña.",
    question: "¿Cómo se distribuyen los cines registrados por OpenStreetMap en la zona oriental y qué etiqueta asigna KNN a un punto nuevo?",
    objective: "Recolectar información geográfica, procesarla, agrupar ubicaciones y representar los resultados de forma interactiva.",
    tools: ["OpenStreetMap", "Overpass Turbo", "Python", "Pandas", "scikit-learn", "Folium"],
    approach: [
      "Consultar amenity=cinema para San Miguel, Usulután, Morazán y La Unión mediante Overpass Turbo.",
      "Procesar un CSV con dos registros y cinco campos; aplicar K-Means con dos grupos.",
      "Aplicar KNN a un punto de prueba y organizar la visualización en un mapa Folium."],
    results: [
      "Se documentaron dos cines: Centenario (Usulután) y Cinemark (San Miguel).",
      "K-Means formó dos grupos; KNN asignó la etiqueta «Usulután» al punto de prueba.",
      "El prototipo ilustró el flujo de datos abiertos a mapa, sin demostrar oportunidades comerciales reales."],
    honesty: "El dataset de solo dos puntos no permite identificar hotspots fiables, validar precisión ni estimar rentabilidad. La figura que se muestra es una visualización editorial elaborada a partir de las coordenadas del informe, NO una captura del Folium original.",
    evidenceNeeded: ["CSV y notebook originales de la actividad", "Captura o archivo HTML del mapa Folium original", "Informe y/o presentación finales (verifica permisos de tus compañeros)", "Repositorio original si existe"],
    kind: "map", evidenceImages: [
      { src: "/evidencias/hotspots-datos-presentacion.png", label: "Evidencia del trabajo · diapositiva de datos", alt: "Diapositiva de la presentación académica sobre los dos registros de cines", type: "evidencia" },
      { src: "/evidencias/hotspots-resultados-presentacion.png", label: "Evidencia del trabajo · diapositiva de resultados", alt: "Diapositiva de la presentación académica con resultados y limitaciones del prototipo", type: "evidencia" },
      { src: "/evidencias/hotspots-visualizacion.svg", label: "Visualización complementaria · basada en el informe", alt: "Diagrama aproximado de dos cines en el oriente de El Salvador, no captura del proyecto original", type: "ilustracion" }
    ]
  }
];

export const sideProjects = [
  { title: "DeafCom", eyebrow: "Hackathon", description: "Prototipo en Power Apps para facilitar la comunicación entre personas sordas y profesionales de la salud.", tools: "Power Apps · Diseño inclusivo" },
  { title: "Sunergy", eyebrow: "Expo de Logros", description: "Casa inteligente a escala con Arduino y paneles solares para explorar almacenamiento energético y alimentación ante apagones.", tools: "Arduino · Energía solar" },
  { title: "Safen", eyebrow: "Expo Tech", description: "Plataforma web concebida para reportar emergencias por desastres naturales y conectar a personas afectadas con ONG y voluntariado.", tools: "Web · Innovación social" }
];
