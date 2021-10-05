import { TaxItem } from "../TaxItem";

export class Beer extends TaxItem{
    constructor(description: string, price: number){
        super('beer', description, price);
    }

    getTax(): number {
        return 0.1
    }
}