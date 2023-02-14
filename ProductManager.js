const fs = require('fs');

// class product {
//     constructor(id,title, description, price, thumbnail,code,stock){
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.thumbnail = thumbnail;
//         this.stock = stock;
//         this.code = code;
//     }
// };
// let carrito = []
// class ProductManager {
//     constructor(){
//         fs.writeFileSync('ProductManager.json',`${arrayVacioJson}`)
//         this.product = new Array()
//     }
//     getProducts=() => {
//         return JSON.stringify(carrito)
//     }
//     addProduct = (id, title, description, price,thumbnail,code, stock) => {
//         let nuevoProducto = new product(id,title, description, price,thumbnail,code,stock)
//         carrito.push(nuevoProducto)
//     }
// }

// let contador = 0
// let productManager = new ProductManager()
// console.log(productManager);
// productManager.addProduct(contador++,"PayDay","juego",2000,"",159,5);
// productManager.addProduct(contador++,"FIFA 20","juego",1000,"",100,5);
// productManager.addProduct(contador++,"PayDay 2","juego",3500,"",354,5);
// productManager.addProduct(contador++,"Dragon Ball Xenoverse 2","juego",600,"",543,5);
// productManager.addProduct(contador++,"The Crew 2","juego",900,"",999,5);
// productManager.addProduct(contador++,"The Crew","juego",200,"",102,5);
// productManager.addProduct(contador++,"Final Fantasy","juego",4500,"",752,5);
// productManager.addProduct(contador++,"Fifa 15","juego",350,"",12,5);
// productManager.addProduct(contador++,"Grand Theft Auto V","juego",150,"",650,5);
// productManager.addProduct(contador++,"Pro Evoluttion Soccer 2020","juego",0,"",780,5);
// console.log(carrito);
// fs.appendFileSync('ProductManager.json',productManager.getProducts())
// console.log(productManager.getProducts());
// let searchId = 5
// let result;
// carrito.forEach(function(item){
//     if (item.id === searchId) {
//         result = item;
//         return;
//     }
// })
// console.log("OBJETO ENCONTRADO:", result);
// let removeProduct = searchId
// let removeElements = carrito.splice(removeProduct, 1)
// console.log("SE ELIMINO UN PRODUCTO ID Y QUEDO ESTE", carrito);
// console.log("EL PRODUCTO ID QUE SE ELIMINO", removeElements);
// server.get("/products/:userId", (request, response)=> {
//     const usuario = carrito.forEach(productManager.getProducts() === request.params.userId)
//     if (item.id === userId) {
//         response.send(carrito)
//     }
//     response.send({message: "usuario no encontrado."})
// })

class Product{
    constructor(id,title, desciption, price, thumbnail, code, stock){
        this.id = id;
        this.title = title;
        this.desciption = desciption;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
};
class ProductManager{
    constructor(){
        this.product = new Array();
    }
    getProduct = () =>{
        return this.product;
    }

    addProduct = (id, title, desciption, price, thumbnail, code, stock) => {
        let nuevoProducto = new Product(id, title, desciption, price, thumbnail, code, stock);
        this.product.push(nuevoProducto);
    }

};

let productManager = new ProductManager();
console.log(productManager);
console.log(productManager.getProduct());
let contador = 0
productManager.addProduct(contador++,"Mate Imperial Calabaza", "Negro", "$ 5600","",0025,10);
productManager.addProduct(contador++,"Mate Imperial Calabaza", "Marron", 5600,"",0035,10);
productManager.addProduct(contador++,"Mate Imperial Madera", "Negro", 4000,"",0056,10);
productManager.addProduct(contador++,"Mate Imperial Madera", "Marron", 4000,"",0060,10);
productManager.addProduct(contador++,"Mate Camionero Calabaza", "Negro", 4500,"",0020,10);
productManager.addProduct(contador++,"Mate Camionero Calabaza", "Marron", 4500,"",0015,10);
productManager.addProduct(contador++,"Mate Torpedo Calabaza", "Negro", 3500,"",0010,10);
productManager.addProduct(contador++,"Mate Torpedo Calabaza", "Marron", 3500,"",0017,10);
productManager.addProduct(contador++,"Mate Imperial Acero", "", 2000,"",0032,10);
productManager.addProduct(contador++,"Mate Torpedo Acero", "", 2000,"",0031,10);
productManager.addProduct(contador++,"Mate Camionera Acero", "", 2000,"",0014,10);
console.log(productManager.getProduct());
fs.writeFileSync('ProductManager.json', JSON.stringify(productManager.getProduct()))
server.get("/products", (request, response) => {
    response.send(productManager.product)
})
server.get("/products/:userId", (request, response)=> {
    fs.readFile('ProductManager.json', 'utf-8', (err, data)=> {
        const usuario = productManager.product.find(u => u.id === request.params.userId);
        if (usuario) {
            response.send(productManager.product);
        }
        response.send({message: "Usuario no encontrado."});
    })
})
