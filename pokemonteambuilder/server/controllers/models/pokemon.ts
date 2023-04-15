import { Model } from "objection";

export class Pokemon extends Model {
    dexNumber!: number;
    name!: string;
    type1!: string;
    type2?: string;
}