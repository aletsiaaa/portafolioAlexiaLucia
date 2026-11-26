import os
import random
import sqlite3
import tkinter as tk
from tkinter import simpledialog, messagebox

CELDA = 28
ANCHO, ALTO = 21, 15   # deben ser impares
BUCLES = 5             # paredes que se abren para crear rutas alternativas
META = (ANCHO - 2, ALTO - 2)
MOV = {"Up": (0, -1), "Down": (0, 1), "Left": (-1, 0), "Right": (1, 0)}

# La base de datos es un archivo que queda junto a este script
DB = os.path.join(os.path.dirname(os.path.abspath(__file__)), "laberinto.db")


# ---------- 1. LABERINTO ----------
def crear_laberinto():
    mapa = [[1] * ANCHO for _ in range(ALTO)]   # 1 = pared, 0 = camino

    def cavar(x, y):
        mapa[y][x] = 0
        direcciones = [(2, 0), (-2, 0), (0, 2), (0, -2)]
        random.shuffle(direcciones)
        for dx, dy in direcciones:
            nx, ny = x + dx, y + dy
            if 0 < nx < ANCHO - 1 and 0 < ny < ALTO - 1 and mapa[ny][nx] == 1:
                mapa[y + dy // 2][x + dx // 2] = 0   # derribar pared del medio
                cavar(nx, ny)

    cavar(1, 1)

    # Abrir algunas paredes para que existan varias rutas posibles
    paredes = [(x, y) for y in range(1, ALTO - 1) for x in range(1, ANCHO - 1)
               if mapa[y][x] == 1 and
               ((mapa[y][x - 1] == 0 and mapa[y][x + 1] == 0) !=
                (mapa[y - 1][x] == 0 and mapa[y + 1][x] == 0))]
    for x, y in random.sample(paredes, BUCLES):
        mapa[y][x] = 0
    return mapa


# ---------- 2. ÁRBOL DE DECISIONES ----------
def todas_las_rutas(mapa):
    rutas, camino = [], [(1, 1)]

    def explorar(x, y):
        if (x, y) == META:               # llegué: guardo esta ruta
            rutas.append(list(camino))
            return
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):   # cada rama
            sig = (x + dx, y + dy)
            if mapa[sig[1]][sig[0]] == 0 and sig not in camino:
                camino.append(sig)       # tomo la decisión
                explorar(*sig)
                camino.pop()             # la deshago y pruebo otra

    explorar(1, 1)
    return sorted(rutas, key=len)        # la primera es la más corta


# ---------- 3. BASE DE DATOS ----------
def conectar():
    con = sqlite3.connect(DB)            # si el archivo no existe, se crea
    con.execute("""CREATE TABLE IF NOT EXISTS resultados (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       nombre TEXT, movimientos INTEGER, porcentaje INTEGER)""")
    return con


def guardar(nombre, movimientos, porcentaje):
    con = conectar()
    con.execute("INSERT INTO resultados (nombre, movimientos, porcentaje) VALUES (?,?,?)",
                (nombre, movimientos, porcentaje))
    con.commit()
    con.close()


def mejores():
    con = conectar()
    filas = con.execute("SELECT nombre, MAX(porcentaje) FROM resultados "
                        "GROUP BY nombre ORDER BY 2 DESC LIMIT 5").fetchall()
    con.close()
    return filas


# ---------- 4. JUEGO ----------
def nuevo():
    global mapa, pos, movs, rutas, actual, ganado
    mapa = crear_laberinto()
    pos, movs, actual, ganado = [1, 1], 0, -1, False
    rutas = todas_las_rutas(mapa)
    dibujar()


def cuadro(x, y, color):
    lienzo.create_rectangle(x * CELDA, y * CELDA, (x + 1) * CELDA, (y + 1) * CELDA,
                            fill=color, outline="")


def dibujar():
    lienzo.delete("all")
    for y in range(ALTO):
        for x in range(ANCHO):
            if mapa[y][x] == 1:
                cuadro(x, y, "#2b3a67")
    if actual >= 0:
        puntos = []
        for x, y in rutas[actual]:
            puntos += [x * CELDA + CELDA // 2, y * CELDA + CELDA // 2]
        lienzo.create_line(*puntos, fill="cyan", width=4)
    cuadro(*META, "#2ecc71")
    cuadro(*pos, "#f1c40f")

    if ganado:
        texto = f"¡Ganaste! Eficiencia: {porcentaje}%  |  R = nuevo laberinto"
    elif actual >= 0:
        texto = f"Ruta {actual + 1} de {len(rutas)}: {len(rutas[actual]) - 1} pasos"
    else:
        texto = f"{len(rutas)} rutas posibles  |  Movimientos: {movs}"
    etiqueta.config(text=texto + "  |  N = ruta, T = ranking")


def tecla(e):
    global movs, actual, ganado, porcentaje
    k = e.keysym
    if k == "r":
        nuevo(); return
    if k == "n":
        actual = (actual + 1) % len(rutas)      # 1ª = más corta, última = más larga
    elif k == "t":
        texto = "\n".join(f"{n}: {p}%" for n, p in mejores())
        messagebox.showinfo("Mejores resultados", texto or "Aún no hay datos")
    elif k in MOV and not ganado:
        nx, ny = pos[0] + MOV[k][0], pos[1] + MOV[k][1]
        if mapa[ny][nx] == 0:
            pos[0], pos[1] = nx, ny
            movs += 1
            if (nx, ny) == META:
                ganado = True
                mejor = len(rutas[0]) - 1                     # pasos de la ruta más corta
                porcentaje = 100 * mejor // max(movs, mejor)  # eficiencia de 0 a 100
                guardar(nombre, movs, porcentaje)
    dibujar()


ventana = tk.Tk()
ventana.title("Laberinto")
nombre = simpledialog.askstring("Jugador", "¿Cómo te llamas?") or "Jugador"
lienzo = tk.Canvas(ventana, width=ANCHO * CELDA, height=ALTO * CELDA, bg="black")
lienzo.pack()
etiqueta = tk.Label(ventana, font=("Arial", 11))
etiqueta.pack(pady=4)
ventana.bind("<Key>", tecla)
nuevo()
ventana.mainloop()
