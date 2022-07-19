class Producto {
    constructor(id, nombre, imagen, precio){
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.precio = precio
    }
}

class Carrito{
    constructor(id, producto){
        this.id = id
        this.producto = producto
    }
}
let catalogoDeProducto = []

let comboUno = new Producto(1, "Pc para Ofimatica", "combo1.jpg", 120,000)
let comboDos = new Producto(2, "Pc Gamer Intel", "combo2.jpg", 150,000)
let comboTres = new Producto(3, "Pc Gamer Ryzen", "combo3.jpg", 145,000)
let monitorUno= new Producto(4, "Monitor Gigabyte", "monitor1.jpg", 100,000)
let monitorDos = new Producto(5, "Monitor Samsung", "monitor2.jpg", 50,000)
let placaUno = new Producto(6, "Placa de video AMD", "placa1.jpg", 230,000)
let placaDos = new Producto(7, "Placa de video Nvidia", "placa2.jpg", 320,000)

catalogoDeProducto.push(comboUno)
catalogoDeProducto.push(comboDos)
catalogoDeProducto.push(comboTres)
catalogoDeProducto.push(monitorUno)
catalogoDeProducto.push(monitorDos)
catalogoDeProducto.push(placaUno)
catalogoDeProducto.push(placaDos)