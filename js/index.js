//****** CLASES ******/

class Producto {
    constructor(id, nombre, imagen, precio) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.precio = precio
    }
}

class Carrito {
    constructor(id) {
        this.id = id
        this.productos = []
    }
    calcularTotal() {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio
        }
        return total
    }
}

//**** CATALOGO DE PRODUCTOS *****/

let catalogoDeProducto = []

let comboUno = new Producto(1, "Pc para Ofimatica", "combo1.jpeg", 200)
let comboDos = new Producto(2, "Pc Gamer Intel", "combo2.jpeg", 300)
let comboTres = new Producto(3, "Pc Gamer Ryzen", "combo3.png", 290)
let monitorUno = new Producto(4, "Monitor Gigabyte", "monitor1.jpeg", 150)
let monitorDos = new Producto(5, "Monitor Samsung", "monitor2.jpeg", 80)
let placaUno = new Producto(6, "Placa de video AMD", "placa1.webp", 800)
let placaDos = new Producto(7, "Placa de video Nvidia", "placa2.jpeg", 1200)

catalogoDeProducto.push(comboUno)
catalogoDeProducto.push(comboDos)
catalogoDeProducto.push(comboTres)
catalogoDeProducto.push(monitorUno)
catalogoDeProducto.push(monitorDos)
catalogoDeProducto.push(placaUno)
catalogoDeProducto.push(placaDos)

//****** CARDS PRODUCTOS ******/

let cardsDiv = document.querySelector("#cards")

catalogoDeProducto.forEach(producto => {
    cardsDiv.innerHTML += rendercard(producto)
})

//**** FUNCIONES *****/

function rendercard(producto) {
    let cardRendered = `
    <div class="card m-3 col-6 col-sm-3" style="width: 18rem;">
<img src="./img/${producto.imagen}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
  <p class="card-text">$ ${producto.precio}</p>
  <a href="#" class="btn btn-primary botonDeCompras" id="${producto.id}">Agregar al Carrito</a>
</div>
</div>
    `
    return cardRendered
}

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito")
    divCarrito.innerHTML = ""
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito")
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += rendercard(producto)
    })
    divCarrito.innerHTML += `<h2>Precio Total: US$ ${carrito.calcularTotal()}</h2>`

}

function renovaeStorage(){
    localStorage.removeItem("carrito"); 
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto)
    })
    limpiarCarrito()
    actualizarCarrito(carritoGuardado)
})
//** INGRESAR PRODCUTOS AL CARRITO **/

let carrito = new Carrito(1)

let botones = document.querySelectorAll(".botonDeCompras")
let arrayDeBotones = Array.from(botones)
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSelecionado = catalogoDeProducto.find(producto => producto.id == e.target.id)
        carrito.productos.push(productoSelecionado)
        limpiarCarrito()
        actualizarCarrito(carrito)
        renovaeStorage()
    })
})