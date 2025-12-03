import { Quantity } from "./quantity.model";


export class CartItem { 
    productId?:   string   | undefined | null;
    quantity?:   Quantity   | undefined | null;
    cartId?:   string   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<CartItem> = {}){
    this.productId = null;
    this.quantity = {};
    this.cartId = null;
    this.id = null;
    const keys = (Object.keys(init) as (keyof CartItem)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

