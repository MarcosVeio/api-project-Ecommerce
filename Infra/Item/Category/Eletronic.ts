import { TaxItem } from "../TaxItem";

export class Eletronic extends TaxItem{
    constructor(description: string, price: number){
        super('eletronic', description, price);
    }

    getTax(): number {
        return 0.5
    }
}