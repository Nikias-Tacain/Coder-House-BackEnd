import ProductManager from './ProductManager';
const express = require('express');
const server = express();
const ip_server = 8080;

server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.get("/", (request, response)=> {
    response.send("<h1 style='color: blue'>PROYECTO BACKEND</h1>")
})
let products = [];

server.get('/api/products', (request, response)=>{
    response.send(products)
})
server.post('/api/products', (request, response)=> {
    let product = request.body;
    if (!product.id || !product.title) {
        response.status(400).send({status: "Error", message: "Producto invalido."});
    }
    products.push(product);
});

server.listen(ip_server, ()=> {
    console.log("El servidor se encuentra prendido en el puerto:" + ip_server);
})

server.get("/products", (request, response) => {
    response.send(ProductManager.product)
})
server.get("/products/:userId", (request, response)=> {
    fs.readFile('ProductManager.json', 'utf-8', (err, data)=> {
        const usuario = ProductManager.product.find(u => u.id === request.params.userId);
        if (usuario) {
            response.send(ProductManager.product);
        }
        response.send({message: "Usuario no encontrado."});
    })
})