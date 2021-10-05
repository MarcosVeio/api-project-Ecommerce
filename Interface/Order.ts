import { ProductInterface } from "./Product";

interface OrderInterface {
    code: string;
    productList: ProductInterface[];
}

export { OrderInterface }