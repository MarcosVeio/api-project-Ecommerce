import express, { Application, Request, Response } from "express";
import { route as orderRoute } from "./View/order/Order"
import { route as productRoute } from "./View/product/Product"
import cors from "cors"

const app: Application = express();
const port = 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(productRoute, orderRoute);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}