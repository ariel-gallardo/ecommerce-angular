

export class Permission { 
    url?:   string   | undefined | null;
    controller?:   string   | undefined | null;
    action?:   string   | undefined | null;
    policy?:   string   | undefined | null;
    id?:   string   | undefined | null;
constructor(init: Partial<Permission> = {}){
    this.url = '';
    this.controller = '';
    this.action = '';
    this.policy = '';
    this.id = '';
    const keys = (Object.keys(init) as (keyof Permission)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

