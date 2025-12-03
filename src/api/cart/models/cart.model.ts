import { CartItem } from "./cart-item.model";


export class Cart { 
    items?:   CartItem[]   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Cart> = {}){
    this.items = [];
    this.id = null;
    const keys = (Object.keys(init) as (keyof Cart)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

