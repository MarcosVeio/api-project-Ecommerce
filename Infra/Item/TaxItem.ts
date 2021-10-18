import { Item } from "./Item";

export abstract class TaxItem extends Item {
    constructor(category: string, description: string, price: number) {
        super(category, description, price);
    }

    calculateTaxes() {
        return this.price + this.getTax()
    }

    abstract getTax(): number
}