// Productos

class Juego {
    constructor (juego, precio, categoria,id, img){
        this.juego = juego
        this.precio = precio
        this.categoria= categoria
        this.id = id
        this.img = img
    }
}

const juegos = [
    new Juego ("Dark Souls", 1500, "accion, Exploracion", 01, "./geimer/juego01.jpg"),
    new Juego ("Elden Ring", 3200, "accion, aventura", 02,"./geimer/juego02.jpg" ),
    new Juego ("Sekiro", 2500,"Accion", 03,"./geimer/juego03.jpg" ),
    new Juego ("God of War", 4000,"Accion, aventura", 04, "./geimer/juego04.jpg" ) ,
    new Juego ("Shadow of the collosus", 1200,"Estrategia, Exploracion", 05, "./geimer/juego05.jpg"),
    new Juego ("Resident Evil 2", 1200,"Survival Horror", 06,"./geimer/juego06.jpg" ),
    new Juego ("Resident Evil: Village", 2900,"Survival Horror, Accion", 07, "./geimer/juego07.jpg"),
    new Juego ("Bloodborne", 3500, "Souls, Accion, Exploracion", 08, ""),
    new Juego ("Demos Souls", 5900, "Accion, Exploracion", 09,""),
    new Juego ("Dark souls 2", 800, "Accion, Souls", 10, ""),
    new Juego ("Dark souls 3", 1200, "Accion, Souls", 11, ""),
    new Juego ("Hollow Knight", 300, "Metroidvania", 12, ""),
    new Juego ("Silent Hills : Homecoming", 699, "Survival Horror, Terror Psicologico ", 13, ""),
    new Juego ("Red Dead Redemption", 1200, "Accion, Aventura, Mundo Abierto", 14, ""),
    new Juego ("Back 4 Blood", 3400, "Zombies, FPS, Cooperativo", 15, ""),
    new Juego ("CupHead", 500, "SoulsLike, 2D, Plataformas", 16, ""),
]

//carrito

let carrito = []


