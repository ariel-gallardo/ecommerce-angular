import { Role } from "./role.model";


export class User { 
    username?:   string   | undefined | null;
    email?:   string   | undefined | null;
    personaId?:   string   | undefined | null;
    rol?:   Role   | undefined | null;
    id?:   number   | undefined | null;
constructor(init: Partial<User> = {}){
    this.username = '';
    this.email = '';
    this.personaId = '';
    this.rol = null;
    this.id = 0;
    const keys = (Object.keys(init) as (keyof User)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}
export namespace UserDTO {
}


