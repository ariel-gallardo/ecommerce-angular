

export class Category { 
    name?:   string   | undefined | null;
    description?:   string   | undefined | null;
    parentId?:   string   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Category> = {}){
    this.name = null;
    this.description = null;
    this.parentId = null;
    this.id = null;
    const keys = (Object.keys(init) as (keyof Category)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

