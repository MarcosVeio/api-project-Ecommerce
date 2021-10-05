import { ProductInterface } from "../Interface/Product";


  class ListOfProduct {
    listProduct: ProductInterface[]=[];

    addidProduct(category: string, description: string, price: number){
      const newProduct = {
        category: category,
        description: description,
        price: price,
        id: `${Math.floor(Math.random() * 1000000)}`
      }

      this.listProduct.push(newProduct)
      return this.listProduct
    }

    getAllProducts(){
      return this.listProduct
    }

    getProductById(idProduct: string){
      return this.listProduct.filter(({ id }) => id === idProduct)
    }

    removeProduct(idProduct: string){
      this.listProduct = this.listProduct.filter(({ id }) => id !== idProduct)
    }
  }

  export { ListOfProduct }