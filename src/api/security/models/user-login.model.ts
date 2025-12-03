

export class UserLogin { 
    email?:   string   | undefined | null;
    username?:   string   | undefined | null;
    password?:   string   | undefined | null;
constructor(init: Partial<UserLogin> = {}){
    this.email = null;
    this.username = null;
    this.password = null;
    const keys = (Object.keys(init) as (keyof UserLogin)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

