import {ValidationError} from '../validation-error.model';

export interface StateDetail<IData,IRequest> extends StateDetailBase<IRequest>
{
    data: IData
}

export interface StateDetailBase<IRequest>
{
    isLoaded: boolean | null;
    hasError: boolean;
    errors: ValidationError[][];
    request: IRequest | null;
    firstInit: boolean;
}