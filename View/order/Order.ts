import { Router, Request, Response } from "express"
import { ListOfOrders } from "../../Infra/Order"
import { products } from "../product/Product"


const route = Router();
const listOfOrders = new ListOfOrders()

route.get('/order', (req: Request, res: Response) => {
  return res.json(listOfOrders)
});

route.get('/order/:code', (req: Request, res: Response) => {
  const getOrderByCode = listOfOrders.getOrderByCode(req.params.code)
  return res.json(getOrderByCode)
});

route.post("/orders", (req: Request, res: Response) => {
  const productList = req.body
  const addidOrder = listOfOrders.addidOrder(productList)
  return res.json(addidOrder)
});

route.post('/order/:code/:id', (req: Request, res: Response) => {
  const idOfProduct = req.params.id;
  const [getProductById] = products.getProductById(idOfProduct);
  const codeOfOrder = req.params.code;
  listOfOrders.addidProductInOrder(codeOfOrder, getProductById)

  return res.json(listOfOrders)
});

route.delete("/order/:code", (req: Request, res: Response) => {
  const removeOrder = listOfOrders.removeOrderByCode(req.params.code)
  return res.json(listOfOrders)
});

route.delete('/order/:code/:id', (req: Request, res: Response) => {
  const idOfProduct = req.params.id;
  const codeOfOrder = req.params.code;
  listOfOrders.removeProductOfOrder(codeOfOrder, idOfProduct)

  return res.json(listOfOrders)
});

export { route }
