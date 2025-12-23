

export class Log {
    serviceName?: string | undefined | null;
    message?: string | undefined | null;
    traceId?: string | undefined | null;
    errorId?: string | undefined | null;
    id?: string | undefined | null;
    constructor(init: Partial<Log> = {}) {
        this.serviceName = '';
        this.message = '';
        this.traceId = '';
        this.errorId = '';
        this.id = '';
        const keys = (Object.keys(init) as (keyof Log)[])
            .filter(k => this[k] !== init[k]);
        if (keys.length > 0) {
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }
}

