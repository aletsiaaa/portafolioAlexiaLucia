# Actividades documentadas · Semanas 3 y 4

Estas fichas corresponden a los aspectos solicitados en Teams: descripción, problema, objetivo, tecnologías, algoritmo/implementación, resultados, código y evidencias.

## Actividad 1 · Regresión lineal (Semana 3)

**Descripción:** Actividad académica sobre el uso de regresión lineal para estudiar relaciones entre variables numéricas y realizar estimaciones a través de un modelo lineal.

**Problema que busca resolver:** ¿Cómo describir la relación entre una variable de entrada y una variable numérica de salida, y cómo aprovechar esa relación para estimar resultados?

**Objetivo:** Comprender cómo funciona una regresión lineal y presentar en forma organizada sus datos, su interpretación, las predicciones y las visualizaciones que efectivamente aparecen en el cuaderno de trabajo.

**Tecnologías y herramientas confirmadas:** Google Colab. El entorno del ejercicio es Python; las bibliotecas específicas del notebook aún no se han podido comprobar.

**Implementación y explicación de la solución:** Se contempla un análisis de las variables numéricas, el estudio de su relación mediante una línea recta y la explicación de la diferencia entre los datos observados y los valores estimados. **El procedimiento exacto del notebook no se pudo consultar**: la URL enviada abrió una página de inicio de sesión.

**Resultados obtenidos:** No pueden transcribirse con fidelidad por ahora. Falta verificar los nombres de variables, valores de coeficientes, visualizaciones, predicciones y métricas que realmente existan en el notebook. No se debe anunciar ningún valor de precisión, R² o MSE sin verlo.

**Código fuente y evidencias:** [Cuaderno de Google Colab de la semana 3](https://colab.research.google.com/drive/1JdNEOVtKKmBXlZXub3pOQljFDMoVDxqB). Para incorporar el código y las gráficas en el portafolio, se recomienda exportar el notebook como `.ipynb` y guardar capturas reales de sus salidas.

**Archivo pendiente para completar esta ficha:** notebook `.ipynb` exportado, o su código y resultados copiados íntegramente. Una vez disponible, sustituir las partes pendientes por la implementación y las conclusiones específicas.

## Actividad 2 · Laberinto (Semana 4)

**Descripción:** Programa interactivo de escritorio desarrollado con Python, en el que la persona debe recorrer un laberinto aleatorio desde el inicio hasta una meta. El programa identifica rutas posibles, permite visualizar recorridos y calcula una puntuación de eficiencia al ganar.

**Problema que busca resolver:** ¿Cómo encontrar rutas válidas entre un punto inicial y una meta, evitando paredes y ciclos, y cómo comparar un recorrido realizado con el más corto encontrado?

**Objetivo general:** Aplicar toma de decisiones y búsqueda algorítmica a un juego funcional que integre interfaz gráfica, exploración de rutas y almacenamiento de resultados.

**Objetivos específicos:**

- Generar un tablero de 21 × 15 casillas con paredes y caminos aleatorios.
- Explorar recorridos alternativos mediante búsqueda en profundidad (DFS) y retroceso (backtracking).
- Ordenar los recorridos por longitud para identificar la ruta más corta.
- Implementar controles de teclado y visualizaciones mediante Tkinter.
- Registrar el nombre de cada jugador, sus movimientos y su porcentaje en SQLite.

**Tecnologías:** Python, Tkinter, SQLite, módulo `random` y programación recursiva. El video compartido muestra el programa ejecutándose en Visual Studio Code.

**Algoritmo y solución implementada:**

1. **Generación:** el tablero inicia con paredes. La función `cavar` abre pasillos recursivamente avanzando dos casillas en direcciones aleatorias. Después se abren cinco paredes para crear alternativas.
2. **Búsqueda:** `todas_las_rutas` explora decisiones mediante DFS. Si encuentra una casilla abierta que no forma parte del camino actual, la agrega; al regresar de esa rama, la retira y prueba otra. Esto es *backtracking*. Cuando alcanza la meta, guarda la ruta.
3. **Selección:** las rutas válidas se ordenan por longitud; la primera es la más corta entre las exploradas. No se utiliza un clasificador entrenado de árbol de decisión.
4. **Interfaz:** el programa dibuja paredes azules, jugador amarillo, meta verde y rutas resaltadas en cian. Flechas: mover; `N`: mostrar la siguiente ruta; `T`: consultar ranking; `R`: crear un laberinto nuevo.
5. **Puntuación y almacenamiento:** la eficiencia se calcula como `100 * pasos_de_ruta_más_corta // max(movimientos, pasos_de_ruta_más_corta)` (división entera). Se guarda el resultado en la tabla `resultados` de `laberinto.db`, y el ranking muestra hasta cinco mejores porcentajes agrupados por nombre.

**Resultados observados:** El código aportado implementa la generación de rutas, el cálculo de eficiencia y el guardado de resultados. En el video original se observa la ventana del programa, cambios entre recorridos resaltados y una partida terminada con **88 % de eficiencia**. El valor corresponde a la partida grabada y puede cambiar cuando se genera otro laberinto.

**Código fuente:** [`public/codigo/laberinto.py`](../public/codigo/laberinto.py) incluido en el proyecto.

**Evidencias reales incorporadas:**

- `public/evidencias/laberinto-tablero.jpg` — captura del video con la interfaz.
- `public/evidencias/laberinto-rutas.jpg` — captura de una ruta resaltada.
- `public/evidencias/laberinto-resultado.jpg` — captura de la partida terminada.
- `public/evidencias/laberinto-demostracion.mp4` — video original completo, sin recrearlo mediante IA.

**Limitaciones y posibles mejoras:** La exploración de todas las rutas simples puede volverse costosa en laberintos más grandes. Se podría implementar búsqueda en anchura (BFS) para hallar solo una ruta más corta sin enumerar todas; también podrían añadirse pruebas específicas para el ranking. Estas son propuestas de mejora, no funcionalidades implementadas.

**Nota de ejecución:** Tkinter crea ventanas de escritorio; para ejecutar el código tal como está se necesita un entorno de Python con pantalla, no una sesión estándar de Google Colab.
