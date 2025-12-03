

export class Persona { 
    name?:   string   | undefined | null;
    lastname?:   string   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Persona> = {}){
    this.name = null;
    this.lastname = null;
    this.id = null;
    const keys = (Object.keys(init) as (keyof Persona)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

