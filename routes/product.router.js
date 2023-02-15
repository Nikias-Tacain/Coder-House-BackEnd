import { Router } from "express";

const routerProduct = Router();

routerProduct.get('/', (request, response)=>{
    console.log("Hello gente product router");
    response.send("ola")
})

export default routerProduct;