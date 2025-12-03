

export class Product { 
    name?:   string   | undefined | null;
    description?:   string   | undefined | null;
    categoryId?:   string   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Product> = {}){
    this.name = null;
    this.description = null;
    this.categoryId = null;
    this.id = null;
    const keys = (Object.keys(init) as (keyof Product)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

