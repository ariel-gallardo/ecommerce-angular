

export class Quantity { 
    value?:   number   | undefined | null;
    unit?:   number   | undefined | null;
constructor(init: Partial<Quantity> = {}){
    this.value = null;
    this.unit = null;
    const keys = (Object.keys(init) as (keyof Quantity)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

