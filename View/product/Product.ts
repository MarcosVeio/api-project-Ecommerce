import { Router, Request, Response } from "express";
import { Beer } from "../../Infra/Item/Category/Beer";
import { Cigar } from "../../Infra/Item/Category/Cigar";
import { Eletronic } from "../../Infra/Item/Category/Eletronic";
import { Water } from "../../Infra/Item/Category/Water";
import { ListOfProduct } from "../../Infra/Product"
import { ProductInterface } from "../../Interface/Product";

const products = new ListOfProduct
const route = Router();

route.get('/product', (req: Request, res: Response) => {
    return res.json(products);
});

route.get('/product/:id', (req: Request, res: Response) => {
    const getProductById = products.getProductById(req.params.id)
    return res.json(getProductById);
});

route.post("/products", (req: Request, res: Response) => {
    for (const product of req.body) {
        const { category, description, price } = product
        const productWithTax = () => {
            switch (category) {
                case 'Cigar':
                    return new Cigar(category, description, price)
                case 'Beer':
                    return new Beer(category, description, price)
                case 'Eletronic':
                    return new Eletronic(category, description, price)
                default:
                    return new Water(category, description, price)
            }
        }
        products.addidProduct(productWithTax())
    }
    return res.json(products)
})

route.delete('/product/:id', (req: Request, res: Response) => {
    const removeProductById = products.removeProduct(req.params.id)
    return res.json(removeProductById);
});

export { route, products }
