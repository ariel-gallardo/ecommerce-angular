

export class LogError { 
    logId?:   number   | undefined | null;
    stackTrace?:   string   | undefined | null;
    exception?:   string   | undefined | null;
    exceptionType?:   string   | undefined | null;
    id?:   number   | undefined | null;
constructor(init: Partial<LogError> = {}){
    this.logId = 0;
    this.stackTrace = '';
    this.exception = '';
    this.exceptionType = '';
    this.id = 0;
    const keys = (Object.keys(init) as (keyof LogError)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

