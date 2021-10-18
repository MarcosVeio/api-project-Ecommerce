import { Item } from "../Item";

export class Water extends Item {
    constructor(category: string, description: string, price: number) {
        super(category, description, price);
    }

    calculateTaxes() {
        return this.price
    }

}