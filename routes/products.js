import express from "express"
import ProductsService from "../utils/productsService.js"
import {faker} from "@faker-js/faker";
const  products = express.Router();
const {commerce, image} = faker;
faker.locale = "es";


products.get("/", async (request, response)=>{
    response.render("form")
})

products.post("/productos",async(request,response)=>{
    const newProduct = request.body;
    const productos = await ProductsService.agregarProducto(newProduct);
    console.log(productos)
    response.redirect("/")
})

products.get("/api/productos-test", async (request, response)=>{
    let productos=[];
    for(let i=0;i<5;i++){
        
        productos.push(
            {
                title: commerce.productName(),
                thumbnail: image.imageUrl(100,100,"product",true),
                price: commerce.price()
            }
        )
    }
   response.render("test", {productos})
})
    

export default products