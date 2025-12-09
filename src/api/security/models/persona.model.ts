import { Address } from "./address.model";


export class Persona { 
    name?:   string   | undefined | null;
    lastname?:   string   | undefined | null;
    address?:   Address   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Persona> = {}){
    this.name = '';
    this.lastname = '';
    this.address = new Address();
    this.id = '';
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

