import { InjectionToken } from '@angular/core';
import { environment } from '@cfg/environment';

export const BASE_PATH = `${environment.api}/Logs`;
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
