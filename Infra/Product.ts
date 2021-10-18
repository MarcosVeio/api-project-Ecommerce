import { ProductInterface } from "../Interface/Product";


class ListOfProduct {
  listProduct: ProductInterface[] = [];

  addidProduct(newProduct: ProductInterface) {
    this.listProduct.push(newProduct)
    return this.listProduct
  }

  getAllProducts() {
    return this.listProduct
  }

  getProductById(idProduct: string) {
    return this.listProduct.filter(({ id }) => id === idProduct)
  }

  removeProduct(idProduct: string) {
    this.listProduct = this.listProduct.filter(({ id }) => id !== idProduct)
  }
}

export { ListOfProduct }