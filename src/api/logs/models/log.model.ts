

export class Log { 
    serviceName?:   string   | undefined | null;
    message?:   string   | undefined | null;
    traceId?:   string   | undefined | null;
    logErrorId?:   number   | undefined | null;
    id?:   number   | undefined | null;
constructor(init: Partial<Log> = {}){
    this.serviceName = null;
    this.message = null;
    this.traceId = null;
    this.logErrorId = 0;
    this.id = 0;
    const keys = (Object.keys(init) as (keyof Log)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

