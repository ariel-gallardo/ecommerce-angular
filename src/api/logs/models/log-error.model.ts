

export class LogError {
    exception?: string | undefined | null;
    stackTrace?: string | undefined | null;
    exceptionType?: string | undefined | null;
    id?: string | undefined | null;
    constructor(init: Partial<LogError> = {}) {
        this.exception = '';
        this.stackTrace = '';
        this.exceptionType = '';
        this.id = '';
        const keys = (Object.keys(init) as (keyof LogError)[])
            .filter(k => this[k] !== init[k]);
        if (keys.length > 0) {
            keys.forEach(k => {
                //@ts-ignore
                this[k] = init[k];
            });
        }
    }
}

