// selector
const contenedor = document.getElementById("contenedor")
const contenedorCarro = document.getElementsByClassName("escondido")[0]
const body = document.getElementsByTagName("body")[0]
const contadorBtn =document.getElementById("contadorBtn")
const totalCarro = document.getElementById("totalCarro")
const productos = document.getElementById ("productos")
//botones
const btnMostrar = document.getElementById("btnCarrito")


//carrito visual

btnMostrar.addEventListener("click", (e) => {    
    e.stopPropagation()
    contenedorCarro.classList.toggle("mostrado")
})

//cerrar carro
body.addEventListener("click", () => {
contenedorCarro.classList.remove("mostrado")
})    

contenedorCarro.addEventListener("click", (e) => {
    e.stopPropagation()
})






//-----------------------------------------------mostrar array de productos al html------------------------------------------------------
const mostrar = (arr) => {
    contenedor.innerHTML= ""

    arr.forEach( (juego) => {
        const div = document.createElement("div")
        div.className = "producto"
        div.innerHTML = `
                        <div class = "producto--Img">
                            <img src = ${juego.img}>
                        </div>
                        <div class = "producto--Info">
                            <p>Juego: ${juego.juego}</p>
                            <p>Precio: $${juego.precio}</p>
                            <p>Categoria: "${juego.categoria}"</p>
                            <button onclick="añadirAlCarro(${juego.id})"> COMPRAR </button>
                        </div>
                    `
    
        contenedor.appendChild(div)      
    })
}

mostrar(juegos)




// -----------------------------------------------------agregar al carro ----------------------------------------------------------------

const añadirAlCarro = (id) => {

    const enCarrito = carrito.find((prod) => prod.id === id)

    if (enCarrito){
        enCarrito.cantidad++
    }else{
        
        const producto = juegos.find ((juego) => juego.id === id)
    
        carrito.push({
            id: producto.id,
            juego: producto.juego,
            precio: producto.precio,
            cantidad: 1
        })
    }

    

    mostrarCarro()
}




//--------------------------------------------------------------pintar en el dom---------------------------------------------

const mostrarCarro = () => {
    
    if (carritoLS){
        carrito = carritoLS
    } 
    productos.innerHTML = ""

        carrito.forEach((prod) => {
            const div = document.createElement("div")
            div.classList.add("carrito")
            div.innerHTML = `
                            <p>Producto : ${prod.juego}</p>
                            <p>Precio : ${prod.precio * prod.cantidad}</p>
                            <p>Cantidad : ${prod.cantidad}</p>
                            <input onclick = "borrarDelCarro(${prod.id})" type="button" value="Eliminar">     
                            `
                         
            productos.appendChild(div)                
        })

        

        localStorage.setItem("juegos",JSON.stringify(carrito))
        

    contadorBtn.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad,0)
    totalCarro.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}

//------------------------------------------------ELIMINAR DEL CARRO y dom----------------------------------------------

const borrarDelCarro = (id) => {
    const producto = carrito.find ((prod) => prod.id === id)
    const index = carrito.indexOf(producto)

    if (producto.cantidad > 1){
        producto.cantidad--
    } else{ carrito.splice(index,1)}
    

    mostrarCarro()
}

let carritoLS = JSON.parse(localStorage.getItem("juegos"))



