# AI Challenge — K-Means y KNN

**Fuente:** `Copia_de_Kmeans_KKNN (1).ipynb`, suministrado por la estudiante. Los números que siguen aparecen como salidas del cuaderno; no son estimaciones inventadas.

## Descripción y problema

Con 500 perfiles de estudiantes **simulados**, el ejercicio analiza si distintos niveles de estudio, asistencia y cumplimiento de tareas permiten descubrir patrones y clasificar un resultado académico. Los datos se generan con NumPy y se procesan con Pandas.

## Objetivo

Comprender el agrupamiento no supervisado mediante K-Means y la clasificación supervisada con KNN, comparar diferentes parámetros y observar el efecto de la normalización.

## Variables y metodología

- **Horas de estudio:** valores aleatorios entre 0 y 20.
- **Asistencia:** valores enteros entre 40 y 100.
- **Tareas:** valores enteros entre 20 y 100.
- **Nota:** cálculo ponderado de los tres factores más variación aleatoria, limitado entre 0 y 10.
- **Resultado:** aprobado si la nota es al menos 6; reprobado en caso contrario.

Para K-Means se escalan horas, asistencia, tareas y nota mediante `StandardScaler`; se realizan agrupaciones con **3 y 4 clusters** y se muestran dos gráficas de horas vs. nota. Para KNN se usan horas, asistencia y tareas como entradas, y «Resultado» como etiqueta de salida. Se reserva **25 % (125 registros)** para prueba y **75 % (375)** para entrenamiento, usando una separación estratificada.

## Resultados originales de K-Means: promedios por cluster

### K-Means con tres grupos

| Grupo | Horas | Asistencia | Tareas | Nota |
|---:|---:|---:|---:|---:|
| 0 | 5.03 | 82.18 | 57.59 | 5.26 |
| 1 | 8.46 | 51.84 | 43.20 | 4.47 |
| 2 | 14.89 | 72.71 | 71.36 | 7.54 |

### K-Means con cuatro grupos

| Grupo | Horas | Asistencia | Tareas | Nota |
|---:|---:|---:|---:|---:|
| 0 | 3.96 | 56.30 | 50.57 | 4.04 |
| 1 | 6.16 | 88.00 | 53.78 | 5.54 |
| 2 | 14.12 | 77.04 | 79.50 | 7.90 |
| 3 | 14.99 | 56.96 | 48.15 | 6.00 |

*Los números de grupos son etiquetas internas del algoritmo, no categorías académicas predeterminadas.*

## Resultados originales de KNN

| K (vecinos) | Con normalización | Sin normalización |
|---:|---:|---:|
| 1 | 78.40 % | 73.60 % |
| 3 | 78.40 % | 82.40 % |
| 5 | 80.00 % | 81.60 % |
| 7 | 80.00 % | 79.20 % |
| 11 | 80.00 % | 80.00 % |
| 15 | **81.60 %** | **82.40 %** |
| 21 | 80.80 % | 80.80 % |

El código selecciona **K = 15** porque es el que produjo la mayor exactitud entre los modelos normalizados (81.60 %). Para la comparación sin normalización, el mejor porcentaje fue 82.40 % (K = 3 y K = 15), por lo que la normalización no fue superior en este caso particular.

## Predicción de un nuevo caso

- Horas de estudio: **4**.
- Asistencia: **55**.
- Tareas: **50**.
- Salida del modelo: **Reprobado**.

## Tecnologías

Google Colab, Python, NumPy, Pandas, Matplotlib, scikit-learn (K-Means, KNeighborsClassifier, StandardScaler, train_test_split, accuracy_score).

## Evidencias incluidas

- Notebook original `.ipynb` con el código, las salidas y dos gráficas.
- Código equivalente `.py` extraído del notebook.
- Imágenes PNG originales extraídas de las salidas del mismo notebook: 3 y 4 grupos.

## Alcance y limitaciones

Es una demostración académica con **datos sintéticos**, donde las notas y etiquetas provienen de una regla generada en el mismo ejercicio. No representa el rendimiento de estudiantes reales ni justifica decisiones escolares sobre personas reales.
