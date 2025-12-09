

export class Coordinates { 
    latitude?:   number   | undefined | null;
    longitude?:   number   | undefined | null;
constructor(init: Partial<Coordinates> = {}){
    this.latitude = 0;
    this.longitude = 0;
    const keys = (Object.keys(init) as (keyof Coordinates)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}

