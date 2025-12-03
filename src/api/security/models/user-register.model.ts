import { Role } from "./role.model";


export class UserRegister { 
    password?:   string   | undefined | null;
    rePassword?:   string   | undefined | null;
    username?:   string   | undefined | null;
    email?:   string   | undefined | null;
    personaId?:   string   | undefined | null;
    rol?:   Role   | undefined | null;
    id?:   number   | undefined | null;
constructor(init: Partial<UserRegister> = {}){
    this.password = null;
    this.rePassword = null;
    this.username = null;
    this.email = null;
    this.personaId = null;
    this.rol = null;
    this.id = 0;
    const keys = (Object.keys(init) as (keyof UserRegister)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}
export namespace UserRegisterDTO {
}


