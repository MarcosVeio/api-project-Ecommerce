import { TaxItem } from "../TaxItem";

export class Beer extends TaxItem {
    constructor(category: string, description: string, price: number) {
        super(category, description, price);
    }

    getTax(): number {
        return 0.1
    }
}