const fs = require('fs');
const express = require('express');
const server = express();
const ip_server = 8080;
server.get("/", (request, response)=> {
    response.send("<h1 style='color: blue'>PROYECTO BACKEND</h1>")
})
server.get("/saludo", (request, response)=> {
    response.send("ola a todos")
})

server.listen(ip_server, ()=> {
    console.log("El servidor se encuentra prendido.");
})

class product {
    constructor(id,title, description, price, thumbnail,code,stock){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.stock = stock;
        this.code = code;
    }
};
const arrayVacioJson = []
let carrito = []
class ProductManager {
    constructor(){
        fs.writeFileSync('ProductManager.json',`${arrayVacioJson}`)
        this.product = new Array()
    }
    getProducts=() => {
        return JSON.stringify(carrito)
    }
    addProduct = (id, title, description, price,thumbnail,code, stock) => {
        let nuevoProducto = new product(id,title, description, price,thumbnail,code,stock)
        carrito.push(nuevoProducto)
    }
}

let contador = 0
let productManager = new ProductManager()
console.log(productManager);
productManager.addProduct(contador++,"PayDay","juego",2000,"",159,5);
productManager.addProduct(contador++,"FIFA 20","juego",1000,"",100,5);
productManager.addProduct(contador++,"PayDay 2","juego",3500,"",354,5);
productManager.addProduct(contador++,"Dragon Ball Xenoverse 2","juego",600,"",543,5);
productManager.addProduct(contador++,"The Crew 2","juego",900,"",999,5);
productManager.addProduct(contador++,"The Crew","juego",200,"",102,5);
productManager.addProduct(contador++,"Final Fantasy","juego",4500,"",752,5);
productManager.addProduct(contador++,"Fifa 15","juego",350,"",12,5);
productManager.addProduct(contador++,"Grand Theft Auto V","juego",150,"",650,5);
productManager.addProduct(contador++,"Pro Evoluttion Soccer 2020","juego",0,"",780,5);
console.log(carrito);
fs.appendFileSync('ProductManager.json',productManager.getProducts())
console.log(productManager.getProducts());
let searchId = 5
let result;
carrito.forEach(function(item){
    if (item.id === searchId) {
        result = item;
        return;
    }
})
console.log("OBJETO ENCONTRADO:", result);
let removeProduct = searchId
let removeElements = carrito.splice(removeProduct, 1)
console.log("SE ELIMINO UN PRODUCTO ID Y QUEDO ESTE", carrito);
console.log("EL PRODUCTO ID QUE SE ELIMINO", removeElements);

server.get("/products", (request, response)=> {
    response.send(productManager.getProducts())
})
server.get("/products/:userId", (request, response)=> {
    const usuario = carrito.find(u => u.id === request.params.userId)
    if (usuario) {
        response.send(carrito)
    }
    response.send({message: "usuario no encontrado."})
})
