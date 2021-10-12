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
    new Juego ("Dark Souls", 1500, "accion", 01, "./geimer/juego01.jpg"),
    new Juego ("Elden Ring", 3200, "accion, aventura", 02,"./geimer/juego02.jpg" ),
    new Juego ("Sekiro", 2500,"Accion", 03,"./geimer/juego03.jpg" ),
    new Juego ("God of War", 4000,"Accion, aventura", 04, "./geimer/juego04.jpg" ) ,
    new Juego ("Shadow od the collosus", 1200,"Estrategia, Exploracion", 05, "./geimer/juego05.jpg"),
    new Juego ("Resident Evil 2", 1200,"Survival Horror", 06,"./geimer/juego06.jpg" ),
    new Juego ("Resident Evil: Village", 2900,"Survival Horror, Accion", 07, "./geimer/juego07.jpg"),
]

//carrito

let carrito = []


