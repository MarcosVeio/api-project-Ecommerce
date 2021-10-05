import { ProductInterface } from "../Interface/Product";
import { OrderInterface } from "../Interface/Order";

class ListOfOrders {
  listOrders: OrderInterface[] = [];

  addidOrder(newProduct: ProductInterface[]) {
    const order = {
      code: `${Math.floor(Math.random() * 1000000)}`,
      productList: newProduct
    }

    this.listOrders.push(order)
    return order
  }

  getAllOrders() {
    return this.listOrders
  }

  getOrderByCode(codeOrder: string) {
    return this.listOrders.filter(({ code }) => code === codeOrder)
  }

  addidProductInOrder(codeOrder: string, product: ProductInterface) {
    for (const order of this.listOrders) {
      if (order.code === codeOrder) {
        return order.productList.push(product)
      }
    }
  }

  removeProductOfOrder(codeOrder: string, idProduct: string) {
    for (const order of this.listOrders) {
      if (order.code === codeOrder) {
        order.productList = order.productList.filter(({ id }) => idProduct !== id)
      }
    }
  }

  removeOrderByCode(codeOrder: string) {
    this.listOrders = this.listOrders.filter(({ code }) => codeOrder !== code)
  }
}

export { ListOfOrders }