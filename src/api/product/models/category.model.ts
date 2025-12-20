

export class Category { 
    name?:   string   | undefined | null;
    description?:   string   | undefined | null;
    parentId?:   string   | undefined | null;
    children?:   Category[]   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Category> = {}){
    this.name = '';
    this.description = '';
    this.parentId = '';
    this.children = [];
    this.id = '';
    const keys = (Object.keys(init) as (keyof Category)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            if (k === 'children') {
                //@ts-ignore
                this.children = (init.children ?? []).map(child => new Category(child));
            } else {
                //@ts-ignore
                this[k] = init[k];
            }
        });
    }
}
}

