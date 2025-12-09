import { Coordinates } from "./coordinates.model";


export class Address { 
    street?:   string   | undefined | null;
    number?:   number   | undefined | null;
    neighborhood?:   string   | undefined | null;
    description?:   string   | undefined | null;
    coordinates?:   Coordinates   | undefined | null;
constructor(init: Partial<Address> = {}){
    this.street = '';
    this.number = 0;
    this.neighborhood = '';
    this.description = '';
    this.coordinates = new Coordinates();
    const keys = (Object.keys(init) as (keyof Address)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

