import { TaxItem } from "../TaxItem";

export class Cigar extends TaxItem{
    constructor(description: string, price: number){
        super('cigar', description, price);
    }

    getTax(): number {
        return 20
    }
}