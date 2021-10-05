import { Router, Request, Response } from "express";
import { Beer } from "../../Infra/Item/Category/Beer";
import { Cigar } from "../../Infra/Item/Category/Cigar";
import { Eletronic } from "../../Infra/Item/Category/Eletronic";
import { Water } from "../../Infra/Item/Category/Water";
import { ListOfProduct } from "../../Infra/Product"

const products = new ListOfProduct
const route = Router();


route.get('/product', (req: Request, res: Response) => {
    return res.json(products);
});

route.get('/product/:id', (req: Request, res: Response) => {
    const getProductById = products.getProductById(req.params.id)
    return res.json(getProductById);
});

route.post("/products/cigar", (req: Request, res: Response) => {
    const { description, price } = req.body
    const { category } = new Cigar(description, price)
    const product = products.addidProduct(category, description, price)
    return res.json(product);
})

route.post("/products/eletronic", (req: Request, res: Response) => {
    const { description, price } = req.body
    const { category } = new Eletronic(description, price)
    const product = products.addidProduct(category, description, price)
    return res.json(product);
})

route.post("/products/beer", (req: Request, res: Response) => {
    const { description, price } = req.body
    const { category } = new Beer(description, price)
    const product = products.addidProduct(category, description, price)
    return res.json(product);
})

route.post("/products/water", (req: Request, res: Response) => {
    const { description, price } = req.body
    const { category } = new Water(description, price)
    const product = products.addidProduct(category, description, price)
    return res.json(product);
})

route.delete('/product/:id', (req: Request, res: Response) => {
    const removeProductById = products.removeProduct(req.params.id)
    return res.json(removeProductById);
});



export { route, products }
