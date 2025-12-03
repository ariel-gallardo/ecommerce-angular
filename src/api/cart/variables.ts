import { InjectionToken } from '@angular/core';
import { environment } from '@cfg/environment';

export const BASE_PATH = `${environment.api}/Cart`;
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
